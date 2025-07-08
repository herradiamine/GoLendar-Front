import {Button} from "@/components/ui/button";
import {Calendar, Clock, Plus, Settings, Users} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";

export default function DashboardComponent() {
    return (
        <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Calendriers</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">9</div>
                        <p className="text-xs text-muted-foreground">3 partagés</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Événements</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94</div>
                        <p className="text-xs text-muted-foreground">4 à venir</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Événements à venir</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Cette semaine</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Calendriers partagés</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">Accès en lecture/écriture</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Events && Fast Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Événements récents</CardTitle>
                        <CardDescription>Vos derniers événements créés</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div key={1} className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">Titre de l'événement</p>
                                    <p className="text-xs text-muted-foreground">
                                        Description de l'événement
                                        • {new Date("today").toLocaleDateString("fr-FR")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Actions rapides</CardTitle>
                        <CardDescription>Accès rapide aux fonctionnalités principales</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" asChild className="h-20 flex-col bg-transparent">
                                <a href="/calendars/new">
                                    <Calendar className="h-6 w-6 mb-2"/>
                                    Nouveau calendrier
                                </a>
                            </Button>
                            <Button variant="outline" asChild className="h-20 flex-col bg-transparent">
                                <a href="/events/new">
                                    <Plus className="h-6 w-6 mb-2"/>
                                    Nouvel événement
                                </a>
                            </Button>
                            <Button variant="outline" asChild className="h-20 flex-col bg-transparent">
                                <a href="/calendars">
                                    <Users className="h-6 w-6 mb-2"/>
                                    Mes calendriers
                                </a>
                            </Button>
                            <Button variant="outline" asChild className="h-20 flex-col bg-transparent">
                                <a href="/settings/profil">
                                    <Settings className="h-6 w-6 mb-2"/>
                                    Mon profil
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
