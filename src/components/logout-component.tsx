import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import Alert from "./alert-component"
import {useNavigate} from "react-router-dom"

export default function LogoutComponent() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Card className="max-w-md mx-auto p-8 flex flex-col items-center gap-6">
                <CardTitle>Déconnexion</CardTitle>
                <CardContent>
                    <Alert variant="default">Déconnexion réussie.</Alert>
                </CardContent>
                <CardFooter>
                    <Button variant="default" className="mt-4" onClick={() => navigate('/login')}>
                        Retour à l'accueil
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}