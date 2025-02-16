import { MenuItem } from "primeng/api";
import { PrimeIcons } from "primeng/api";

export const ITEMS_NAV_OPTIONS: MenuItem[] = [
    {
        items: [
            {
                label: 'Configuração',
                icon: PrimeIcons.COG,
                iconClas: 'menu-item-spacing'

            },
            {
                label: 'Sair',
                icon: PrimeIcons.SIGN_OUT,
                iconClas: 'menu-item-spacing'
            }
        ]
    }
] 