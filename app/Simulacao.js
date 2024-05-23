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
                        <legend className="-ml-1 px-1 text-sm font-medium">variables</legend>
                        <div className="grid gap-3">
                            <Label htmlFor="model">insert variable data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Span Length">Span Length</Label>
                                <Input id="Span Length" type="number" placeholder="80" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Modulation">Modulation</Label>
                                <Select defaultValue="Modulation">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Modulation" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="system">System</SelectItem>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="assistant">Assistant</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="N_Cores">N_Cores</Label>
                                <Input id="N_Cores" type="number" placeholder="0.7" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Guard Band">Guard Band</Label>
                                <Input id="Guard Band" type="number" placeholder="0.0" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Network Topology">Network Topology</Label>
                                <Input id="Network Topology" type="number" placeholder="0.7" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Traffic conn type">Traffic conn type</Label>
                                <Input id="Traffic conn type" type="number" placeholder="0.0" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <legend className="-ml-1 px-1 text-sm font-medium">algorithm</legend>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Routing">Routing</Label>
                                <Input id="Routing" type="number" placeholder="0.7" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="Fiber Allocation">Fiber Allocation</Label>
                                <Input id="Fiber Allocation" type="number" placeholder="0.0" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Type core selection">Type core selection</Label>
                                <Input id="Type core selection" type="number" placeholder="0.7" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </Card>
        </main>
    )
}
