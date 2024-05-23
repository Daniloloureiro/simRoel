/*Pagina para parametros de camada de Rede*/
import * as React from "react"

import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Simulacao() {
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <form className="grid w-full items-start gap-6">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">Insert simulation data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="N_simulations">Number of simulations</Label>
                                <Input id="N_simulations" type="number" placeholder="1" min="1" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Traffic lambda">Traffic lambda</Label>
                                <Input id="Traffic lambda" type="number" placeholder="1" min="1" />
                            </div>
                        </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Calc_OSRN">Calculate OSRN(dB)</Label>
                                <Select defaultValue="Calc_OSRN">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a is on or off" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="on">On</SelectItem>
                                        <SelectItem value="of">Off</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Calc_Crosstalk">Calculate Crosstalk(dB)</Label>
                                <Select defaultValue="Calc_Crosstalk">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a is on or off" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="on">On</SelectItem>
                                        <SelectItem value="of">Off</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Intervalo de confiança">Intervalo de confiança</Label>
                                <Select defaultValue="Intervalo de confiança">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a is on or off" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="on">On</SelectItem>
                                        <SelectItem value="of">Off</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        
                    </fieldset>
                </form>
            </Card>
        </main>
    )
}
