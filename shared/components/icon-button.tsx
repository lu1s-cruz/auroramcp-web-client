'use client';

import {Size} from "@/shared/types/size-type";
import {IconButtonProps} from "@/shared/types/icon-button-props-type";
import {SizesEnum} from "@/shared/enums/sizes_enum";
import {IconManager} from "@/shared/utils/icon_manager";


export default function IconButton({
                                       onClick,
                                       size = SizesEnum.Medium,
                                       icon,
                                       ariaLabel,
                                       className = "",
                                       visible = true}:IconButtonProps )
{
    const sizePx = IconManager.getSize(size);
    return(
        <button
        type="button"
        aria-label={ariaLabel}
        onClick={onClick}
        className={`flex items-center justify-center rounded-full hover:bg-gray-100 transition ${className}`}
        style={{ width: sizePx, height: sizePx}}
        >
        <span style={{ width: sizePx, height: sizePx }}>{IconManager.showIcon(icon, size)}</span>
    </button>);

}