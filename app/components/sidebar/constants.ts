import Analytics from "@/app/svgs/Analytics";
import Appearance from "@/app/svgs/Appearance";
import Audience from "@/app/svgs/Audience";
import Delivery from "@/app/svgs/Delivery";
import Discounts from "@/app/svgs/Discounts";
import HomeIcon from "@/app/svgs/HomeIcon";
import Marketing from "@/app/svgs/Marketing";
import OrdersIcon from "@/app/svgs/OrdersIcon";
import Payments from "@/app/svgs/Payments";
import Plugins from "@/app/svgs/Plugins";
import ProductsIcon from "@/app/svgs/ProductsIcon";
import Tools from "@/app/svgs/Tools";


export type SidebarItem = {
    icon: React.ComponentType;
    displayName: string;
    path: string;
}

const createSidebarItem = (icon: React.ComponentType, displayName: string, path: string): SidebarItem => ({
    icon,
    displayName,
    path,
});

export const SideBarList: SidebarItem[] = [
    createSidebarItem(HomeIcon, "Home", "/home"),
    createSidebarItem(OrdersIcon, "Orders", "/orders"),
    createSidebarItem(ProductsIcon, "Products", "/products"),
    createSidebarItem(Delivery, "Delivery", "/delivery"),
    createSidebarItem(Marketing, "Marketing", "/marketing"),
    createSidebarItem(Analytics, "Analytics", "/analytics"),
    createSidebarItem(Payments, "Payments", "/payments"),
    createSidebarItem(Tools, "Tools", "/tools"),
    createSidebarItem(Discounts, "Discounts", "/discounts"),
    createSidebarItem(Audience, "Audience", "/audience"),
    createSidebarItem(Appearance, "Appearance", "/appearance"),
    createSidebarItem(Plugins, "Plugins", "/plugin"),
];