'use client';

import IconButton from "@/shared/components/icon-button";
import ShowHidePanelIcon from "@/shared/svg-icons/show_hide_panel_icon";
import {SizesEnum} from "@/shared/enums/sizes_enum";
import {IconsEnum} from "@/shared/enums/icons_enum";

export default function MenuBar(){
    return (
        <div>
            <IconButton
                onClick={() => alert('MenuBar')}
                icon = {IconsEnum.ShowHidePanel}
                size ={SizesEnum.Huge}
                ariaLabel="Toggle Menu Bar"

            ></IconButton>
        </div>
    );
}