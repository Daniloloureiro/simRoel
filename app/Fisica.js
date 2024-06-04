/*Pagina para parametros de camada fisica*/
import * as React from "react"
import './parametros.css'
import {useFormContext} from 'react-hook-form';

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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

export default function Fisica() {
    const {register,control}= useFormContext();
  
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <div className="grid w-full items-start gap-6" >
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">Insert Physical data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Bandwidth"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Bandwidth">Bandwidth</Label>
                                <Select onValueChange={field.onChange} defaultValue="Bandwidth">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="4">4 Thz</SelectItem>
                                    <SelectItem value="9">9 Thz</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Slot size">Slot size(Ghz)</Label>
                                <Input className='input' {...register("Slot Size")}type="number" placeholder="12.5" min="12.5" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Node Loss">Node Loss(dB)</Label>
                                <Input className='input' {...register("Node Loss")} type="number" placeholder="16" min="16" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Fiber Loss Coefficient">Fiber Loss Coefficient(dB/km)</Label>
                                <Input className='input' {...register("Fiber Loss Coefficient")} type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Noise Figure">Noise Figure(dB)</Label>
                                <Input className='input' {...register("Nose Figure")} type="number" placeholder="5.5" min="5.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Signal_Power"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Signal_Power">Signal Power</Label>
                                <Select onValueChange={field.onChange} defaultValue="Signal_Power">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="mW">mW</SelectItem>
                                    <SelectItem value="dB">dB</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Reference Band">Reference Band(Ghz)</Label>
                                <Input className='input' {...register("Reference Band")} type="number" placeholder="12.5" min="12.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Bending Radius">Bending Radius(m)</Label>
                                <Input className='input'{...register("Bending Radius")}type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Coupling Coefficient">Coupling Coefficient</Label>
                                <Input className='input' {...register("Coupling Coefficient")} type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Core Pitch">Core Pitch(µm)</Label>
                                <Input className='input' {...register("Core Pitch")} type="number" placeholder="45" min="45" />
                            </div>
                            </div>
                        </div>
                    </fieldset>
                   
                </div>
            </Card>
        </main>
    )
}
