'use client';
import { Switch } from '@nextui-org/react'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from '@heroicons/react/20/solid';
import { SunIcon } from '@heroicons/react/24/solid';

const ThemeSwticher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <Switch
            size="sm"
            color='default'
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onValueChange={() => { setTheme(theme === "light" ? "dark" : "light") }}
        />
    );
};
export default ThemeSwticher;