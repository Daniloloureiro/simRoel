/*Pagina para parametros de camada de Rede*/
import * as React from "react"
import './parametros.css'

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

export default function Rede() {
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <form className="grid w-full items-start gap-6">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <legend className="-ml-1 px-1 text-sm font-medium">variables</legend>
                        <div className="grid gap-3">
                            <Label htmlFor="model">insert variable network data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Network Topology">Network Topology</Label>
                                <Select defaultValue="Network Topology">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Network Topology" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dt">dt</SelectItem>
                                        <SelectItem value="nsfnet">nsfnet</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Guard Band">Guard Band</Label>
                                <Input className='input' id="Guard Band" type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="N_cores_MCI">MCI's number of cores</Label>
                                <Select defaultValue="N_cores_MCI">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a N_cores_MCI" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="7">7</SelectItem>
                                        <SelectItem value="12">12</SelectItem>
                                        <SelectItem value="19">19</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Modulation">Modulation</Label>
                                <Select defaultValue="Modulation">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Modulation" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="4">4 DP-QAM</SelectItem>
                                        <SelectItem value="8">8 DP-QAM</SelectItem>
                                        <SelectItem value="16">16 DP-QAM</SelectItem>
                                        <SelectItem value="32">32 DP-QAM</SelectItem>
                                        <SelectItem value="64">64 DP-QAM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Span Length">Span Length (km)</Label>
                                <Input className='input' id="Span Length" type="number" placeholder="80" min="80" max="100" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Traffic conn type">Traffic conn type</Label>
                                <Select defaultValue="Traffic conn type">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Traffic conn type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="48">48 Gb/s</SelectItem>
                                        <SelectItem value="120">120 Gb/s</SelectItem>
                                        <SelectItem value="240">240 Gb/s</SelectItem>
                                        <SelectItem value="32">480 Gb/s</SelectItem>
                                        <SelectItem value="1.2">1.2 Tb/s</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <legend className="-ml-1 px-1 text-sm font-medium">algorithm</legend>
                        <div className="grid gap-3">
                            <Label htmlFor="model">insert algorithm network data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Routing">Routing</Label>
                                <Select defaultValue="Routing">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Routing" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="first_fit">first fit</SelectItem>
                                        <SelectItem value="random fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Fiber allocation">Fiber allocation</Label>
                                <Select defaultValue="Fiber allocation">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Fiber allocation" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="first_fit">first fit</SelectItem>
                                        <SelectItem value="random fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Type Core selection">Type Core selection</Label>
                                <Select defaultValue="Type Core selection">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a Type Core selection" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="first_fit">first fit</SelectItem>
                                        <SelectItem value="random fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            </div>
                    </fieldset>
                </form>
            </Card>
        </main>
    )
}
