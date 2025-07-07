import { ArrowLeft, Calendar, Save } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function CalendarFormComponent() {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const handleSubmit = async (e: FormEvent) => {}
    const handleInputChange = async (e: FormEvent) => {}

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                    <a href="/calendars">
                        <ArrowLeft className="h-4 w-4 mr-1"/>
                        Retour
                    </a>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold">Nouveau calendrier</h1>
                    <p className="text-muted-foreground">Créez un nouveau calendrier pour organiser vos événements</p>
                </div>
            </div>

            {error && (
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2"/>
                        Détails du calendrier
                    </CardTitle>
                    <CardDescription>Remplissez les informations de votre nouveau calendrier</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div className="space-y-2">
                            <Label htmlFor="title">Titre *</Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Nom de votre calendrier"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Description de votre calendrier (optionnel)"
                                rows={4}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end space-x-4 pt-4">
                            <Button type="button" variant="outline" asChild>
                                <a href="/calendars">Annuler</a>
                            </Button>
                            <Button type="submit" disabled={saving}>
                                <Save className="h-4 w-4 mr-2"/>
                                {saving ? "Création..." : "Créer le calendrier"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-blue-50/50 border-blue-200">
                <CardHeader>
                    <CardTitle className="text-blue-800 flex items-center">
                        <Calendar className="h-5 w-5 mr-2"/>
                        Conseils
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-700 space-y-2">
                    <p>• Choisissez un nom descriptif pour identifier facilement votre calendrier</p>
                    <p>• La description peut contenir des informations sur l'usage du calendrier</p>
                    <p>• Vous pourrez inviter d'autres utilisateurs à collaborer sur ce calendrier</p>
                    <p>• Vous aurez les droits d'administrateur sur ce calendrier</p>
                </CardContent>
            </Card>
        </div>
    )
}