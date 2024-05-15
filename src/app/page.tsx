import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        name: "Quality Guarantee",
        Icon: CheckCircle,
        description:
            "Rest assured, every product on our platform is verified by our team.",
    },
    {
        name: "For People, For the Planet",
        Icon: Leaf,
        description:
            "Embrace sustainability by supporting local artists and small businesses. Less waste, more green.",
    },
    {
        name: "Secure Transactions",
        Icon: ShieldCheck,
        description:
            "Trade with confidence through our secure transaction system.",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl dark:text-foreground">
                        Discover, collect, trade your art.
                    </h1>
                    <p className="mt-4 text-lg max-w-prose text-foreground/50 md:text-xl">
                        Welcome to Maker's Muse, our artisan marketplace. Every
                        item tells a unique story! We provide a secure space for
                        talented creators to sell their handmade products
                        crafted with love and dedication.
                    </p>
                    <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/products" className={buttonVariants()}>
                            Browse products
                        </Link>
                    </div>
                </div>
                {/* TODO: Add a carousel of categories */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-100">
                <MaxWidthWrapper className="py-12">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk) => (
                            <div
                                key={perk.name}
                                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className="md:flex-shrink-0 flex justify-center">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/40 text-primary">
                                        <perk.Icon className="w-1/3 h-1/3" />
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-foreground">
                                        {perk.name}
                                    </h3>
                                    <p className="mt-3 text-sm text-foreground/50">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
