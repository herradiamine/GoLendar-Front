import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Ban } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function NotFoundComponent() {
  const navigate = useNavigate();

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
            <Button variant="default" className="mt-4" onClick={() => navigate('/')}>
                Retour à l'accueil
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}