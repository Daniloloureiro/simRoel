/*Pagina para parametros de camada de Rede*/
import * as React from "react";
import './parameters.css';
import {useFormContext} from 'react-hook-form';
import { Button } from "@/components/ui/button"
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
  } from "@/components/ui/form";

export default function Networking() {
    const {register,control}= useFormContext();
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <div className="grid w-full items-start gap-6">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">insert variable data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Network_Topology"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Network_Topology">Network Topology</Label>
                                <Select onValueChange={field.onChange} defaultValue="Network_Topology">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="dt">dt</SelectItem>
                                    <SelectItem value="nsfnet">nsfnet</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Guard Band">Guard Band</Label>
                                <Input className='input' {...register("Guard Band")}  type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="N_cores_MCF"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="N_cores_MCF">MCF's number of cores</Label>
                                <Select onValueChange={field.onChange} defaultValue="N_cores_MCF">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="7">7</SelectItem>
                                    <SelectItem value="12">12</SelectItem>
                                    <SelectItem value="19">19</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Max_Modulation"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Max_Modulation">Max.Modulation</Label>
                                <Select onValueChange={field.onChange} defaultValue="Max_Modulation">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="4">4 DP-QAM</SelectItem>
                                        <SelectItem value="8">8 DP-QAM</SelectItem>
                                        <SelectItem value="16">16 DP-QAM</SelectItem>
                                        <SelectItem value="32">32 DP-QAM</SelectItem>
                                        <SelectItem value="64">64 DP-QAM</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Span Length">Span Length (km)</Label>
                                <Input className='input' {...register("Span Length")} type="number" placeholder="80" min="80" max="100" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Traffic_conn_type"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Traffic_conn_type">Traffic conn type</Label>
                                <Select onValueChange={field.onChange} defaultValue="Traffic_conn_type">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                        <SelectItem value="48">48 Gb/s</SelectItem>
                                        <SelectItem value="120">120 Gb/s</SelectItem>
                                        <SelectItem value="240">240 Gb/s</SelectItem>
                                        <SelectItem value="32">480 Gb/s</SelectItem>
                                        <SelectItem value="1.2">1.2 Tb/s</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">insert allocation algorithm data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Routing"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Routing">Routing</Label>
                                <Select onValueChange={field.onChange} defaultValue="Routing">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="first_fit">first fit</SelectItem>
                                    <SelectItem value="random_fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Fiber_allocation"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Fiber_allocation">Fiber allocation</Label>
                                <Select onValueChange={field.onChange} defaultValue="Fiber_allocation">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="first_fit">first fit</SelectItem>
                                    <SelectItem value="random_fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Type_Core_selection"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Type_Core_selection">Type Core selection</Label>
                                <Select onValueChange={field.onChange} defaultValue="Type_Core_selection">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="first_fit">first fit</SelectItem>
                                    <SelectItem value="random_fit">random fit</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            </div>
                    </fieldset>
                    
                </div>
            </Card>
        </main>
    )
}
