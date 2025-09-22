import {Size} from "@/shared/types/size-type";
import ShowHidePanelIcon from "@/shared/svg-icons/show_hide_panel_icon";
import {IconsEnum} from "@/shared/enums/icons_enum";
import {SizesEnum} from "@/shared/enums/sizes_enum";

export class IconManager{
    // A mapping of size names to their corresponding pixel values
    static readonly _sizeMap = (size: Size):number =>{
        switch(size){
            case SizesEnum.ExtraSamll:
                return 12;
            case SizesEnum.Small:
                return 16;
            case SizesEnum.Medium:
                return 24;
            case SizesEnum.Large:
                return 32;
            case SizesEnum.Huge:
                return 48;
            default:
                return 24;
        }
    }
    // The default size for all icons
    static readonly defaultSize: Size = SizesEnum.Medium;
    // The default size in pixels for all icons
    static readonly defaultSizePx: number = IconManager.getSize(IconManager.defaultSize);

    static showIcon(icon: IconsEnum, size: Size){
        switch(icon){
            case IconsEnum.ShowHidePanel:
                return IconManager.showHidePanel({size});

        }
    }

    static showHidePanel({size = SizesEnum.Medium}:{size?:Size}){
        const finalSize = IconManager._sizeMap(size) || IconManager._sizeMap(size);

        return (<ShowHidePanelIcon size={finalSize}/>);
    }

    static getSize(size: Size): number {
        return IconManager._sizeMap(size)|| IconManager._sizeMap(size);
    }
}