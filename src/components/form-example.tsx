"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Invalid e-mail.",
  }),
  password: z.string().min(2, {
    message: "Invalid password.",
  }),
})
 
export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="firstname" render={
          ({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl><Input placeholder="John" {...field} /></FormControl>
              <FormDescription>This is your public display Firstname.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="lastname" render={
          ({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl><Input placeholder="Doe" {...field} /></FormControl>
              <FormDescription>This is your public display Lastname.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="email" render={
          ({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
              <FormDescription>This is your accounts e-mail.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="password" render={
          ({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input placeholder="********" {...field} /></FormControl>
              <FormDescription>Make sure nobody is looking before typing it.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}