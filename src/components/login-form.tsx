"use client"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/auth';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Alert from "@/components/alert-component";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login({ email, password });
    if (data.success === true) {
      setSuccess(true);
      setMessage(data.message);
      navigate('/home');
    } else {
      setSuccess(false);
      setError(data.error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your informations below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
                </div>
                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">Login</Button>
                <Button variant="outline" className="w-full">Login with Google</Button>
              </div>
              <div className="flex flex-col gap-3">
                {error && <Alert variant="destructive">{error}</Alert>}
                {success && <Alert variant="default">{message}</Alert>}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <a href="/register" className="underline underline-offset-4">Sign up</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
