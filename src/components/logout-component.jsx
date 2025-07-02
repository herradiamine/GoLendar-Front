import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Alert from "./alert-component"

export default function LogoutComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="max-w-md mx-auto p-8 flex flex-col items-center gap-6">
        <CardTitle>Déconnexion</CardTitle>
        <CardContent>
            <Alert variant="default">Déconnexion réussie.</Alert>
        </CardContent>
        <CardFooter>
            <Button variant="default" className="mt-4">
                Retour à l'accueil
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}