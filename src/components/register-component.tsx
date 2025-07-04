import { useState } from 'react';
import { registerUser } from '../services/user';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Alert from "@/components/alert-component";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const data = await registerUser({ lastname, firstname, email, password });
      if(data.success) {
        setSuccess(data.success);
        setMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your informations below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstname">Firstname</Label>
                <Input id="firstname" type="text" placeholder="John" onChange={e => setFirstname(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastname">Lastname</Label>
                <Input id="lastname" type="text" placeholder="Doe" onChange={e => setLastname(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" placeholder="m@example.com" onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">Register</Button>
                <Button variant="outline" className="w-full">Register with Google</Button>
              </div>
              <div className="flex flex-col gap-3">
                {error && <Alert variant="destructive">{error}</Alert>}
                {success && <Alert variant="default">{message}</Alert>}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
