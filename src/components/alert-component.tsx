import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

type AlertComponentProps = {
    variant?:  "default" | "destructive"
    className?: string
    children?: React.ReactNode
}

export default function LoginForm({
    className,
    children, 
    variant,
    ...props
  }: AlertComponentProps) {
    let title = "";
    if (variant === "default") {
        title = "Message";
    } else {
        title = "Erreur";
    }
    return (
        <Alert variant={variant}>
            <Terminal />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {children}
            </AlertDescription>
        </Alert>    
    )
  }