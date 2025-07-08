import {Button} from "@/components/ui/button";
import {Calendar, Plus, Settings, Users} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

export default function CalendarsComponent() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">My calendars</h1>
                    <p className="text-muted-foreground">Manage calendars and organize events</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    <Button asChild><a href="/calendars/new"><Plus className="h-4 w-4 mr-2"/>New calendar</a></Button>
                </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-8 w-8 text-blue-600"/>
                            <div>
                                <p className="text-2xl font-bold">15</p>
                                <p className="text-sm text-muted-foreground">Calendriers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Users className="h-8 w-8 text-green-600"/>
                            <div>
                                <p className="text-2xl font-bold">74</p>
                                <p className="text-sm text-muted-foreground">Membres total</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Settings className="h-8 w-8 text-orange-600"/>
                            <div>
                                <p className="text-2xl font-bold">59</p>
                                <p className="text-sm text-muted-foreground">Événements total</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
  