'use client';

import IconButton from "@/shared/components/icon-button";
import { IconsEnum } from "@/shared/enums/icons_enum";
import { SizesEnum } from "@/shared/enums/sizes_enum";

export default function MenuBarHeader(){
    return (
        <div>
            <IconButton 
                onClick={() => {}}
                size= {SizesEnum.Medium}
                icon = {IconsEnum.ShowHidePanel}
                ariaLabel="App Icon Button"
            />

            <IconButton 
                onClick={() => {}}
                size= {SizesEnum.Medium}
                icon = {IconsEnum.ShowHidePanel}
                ariaLabel="App Icon Button"
            />
                

        </div>
    );
}