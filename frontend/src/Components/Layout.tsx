import { AppShell, Box, Header, Modal } from "@mantine/core";
import { ArticleCardList } from "./ArticleCardList";
import Feed from "./Feed";
import { NavbarPrincipal } from "./NavbarPrincipal";

export function Layout() {

    return (
        <AppShell
        navbar={<NavbarPrincipal/>}
        >
            <ArticleCardList/>
        </AppShell>
    )
}