import {Calendar, Settings, Users} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

export default function CalendarsComponent() {
    return (
        <>
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
  