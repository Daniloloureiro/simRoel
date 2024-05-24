/*Pagina para parametros de camada fisica*/
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

export default function Fisica() {
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <form className="grid w-full items-start gap-6">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">Insert Physical data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Bandwidth">Bandwidth</Label>
                                <Select defaultValue="Bandwidth">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a is Bandwidth" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="4">4 Thz</SelectItem>
                                        <SelectItem value="9">9 Thz</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Slot size">Slot size(Ghz)</Label>
                                <Input className='input' id="Slot size" type="number" placeholder="12.5" min="12.5" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Node Loss">Node Loss(dB)</Label>
                                <Input className='input' id="Node Loss" type="number" placeholder="16" min="16" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Fiber Loss Coefficient">Fiber Loss Coefficient(dB/km)</Label>
                                <Input className='input' id="Fiber Loss Coefficient" type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Noise Figure">Noise Figure(dB)</Label>
                                <Input className='input' id="Noise Figure" type="number" placeholder="5.5" min="5.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Signal Power">Signal Power</Label>
                                <Select defaultValue="Signal Power">
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a is Signal Power" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mW">mW</SelectItem>
                                        <SelectItem value="dB">dB</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Reference Band">Reference Band(Ghz)</Label>
                                <Input className='input' id="Reference Band" type="number" placeholder="12.5" min="12.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Bending Radius">Bending Radius(m)</Label>
                                <Input className='input' id="Bending Radius" type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Bending Radius">Bending Radius(m)</Label>
                                <Input className='input' id="Bending Radius" type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Coupling Coefficient">Coupling Coefficient</Label>
                                <Input className='input' id="Coupling Coefficient" type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Core Pitch">Core Pitch(µm)</Label>
                                <Input className='input' id="Core Pitch" type="number" placeholder="45" min="45" />
                            </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </Card>
        </main>
    )
}
