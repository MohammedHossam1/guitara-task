'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"
import { usePathname } from "next/navigation"
const BreadCrump = () => {
    const pathname = usePathname()
    const finalPath = pathname.split("/").filter(Boolean)
    return (
        <div className="h-40 text-center lg:h-[20rem] relative overflow-hidden flex items-center justify-center flex-col">
            <Image src="/bread.jpg" alt="logo" width={100} height={100} className="object-cover absolute inset-0  flex items-center justify-center w-full h-full opacity-50" />
            <div className="relative z-10 ">
                <h1 className=" text-xl lg:text-2xl xl:text-4xl mb-3 3xl:text-5xl font-medium capitalize">{finalPath}</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black hover:text-main" href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-gray-500">{finalPath}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    )
}

export default BreadCrump