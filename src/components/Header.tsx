import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ThemeModeSwitch from './ThemeModeSwitch';
import Search from './Search';

interface HeaderProps {
    colorMode: 'light' | 'dark',
    toggleColorMode: (mode: string) => void
}

export default function Header({ toggleColorMode, colorMode }: HeaderProps) {
    return (
        <Stack
            direction="row"
            sx={{
                display: { xs: 'none', md: 'flex' },
                width: '100%',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                maxWidth: { sm: '100%', md: '1700px' },
                pt: 1.5,
            }}
            spacing={2}
        >
            <NavbarBreadcrumbs />
            <Stack direction="row" sx={{ gap: 1 }}>
                <Search />
                <CustomDatePicker />
                <MenuButton showBadge aria-label="Open notifications">
                    <NotificationsRoundedIcon />
                </MenuButton>
                <ThemeModeSwitch checked={colorMode === 'dark'} onChange={(event) => {
                    if (event.target.checked)
                        toggleColorMode('dark');
                    else toggleColorMode('light');
                }} />
            </Stack>
        </Stack>
    );
}
