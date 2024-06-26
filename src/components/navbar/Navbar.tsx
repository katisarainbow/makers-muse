import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";
import { HeartHandshake } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Card from "./Card";

const Navbar = () => {
    const user = null;
    return (
        <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: Mobile nav */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <HeartHandshake className="w-8 h-8" />
                                    {/* TODO: Logo */}
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block ">
                                <NavItems />
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            Sign In
                                        </Link>
                                    )}
                                    {user ? null : (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    )}
                                    {user ? null : (
                                        <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            Create account
                                        </Link>
                                    )}
                                    {user ? (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span
                                                className="h-6 w-px bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
