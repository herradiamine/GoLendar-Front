import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Ban } from "lucide-react"

export default function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="max-w-md mx-auto p-8 flex flex-col items-center gap-6">
        <CardTitle>Erreur 404</CardTitle>
        <CardContent>
            <Alert variant="destructive">
                <Ban className="w-12 h-12 text-destructive mb-2" />
                <AlertTitle>Page non trouvée</AlertTitle>
                <AlertDescription>
                    La page que vous cherchez n'existe pas ou a été déplacée.
                </AlertDescription>
            </Alert>
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