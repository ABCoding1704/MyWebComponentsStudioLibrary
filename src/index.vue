<script lang='ts'>
import { defineStore } from 'pinia';
import { defineComponent, defineCustomElement, ref, reactive } from 'vue'

export interface ITooltipSelectionItem {
        ID: number;
        Text: string;
        Emmitter: string
    }

    const emptyTooltipSelectionItem = reactive<ITooltipSelectionItem[]>([
        {
            ID: 0, 
            Text: "Option1",
            Emmitter: "VorschaegePopup"
        },
        {
            ID: 1, 
            Text: "Option2",
            Emmitter: "VorschaegePopup"
        }
    ])
    const datasourceSelection = ref([emptyTooltipSelectionItem]);



    export const TooltipSelectionStore = defineStore('TooltipSelection', ({
        state: () => ({
            Visibility: true,
            Tooltiptext: "Hallo, das ist ein Tooltip mit mehreren Optionen zum auswählen",
            datasourceSelection: datasourceSelection,
            selectedItem: -1
        }),
      })
    )
    
    // let tooltipText: string = "Hallo, das ist ein Tooltip mit mehreren Optionen zum auswählen"
    export default defineComponent({
        name: 'TooltipContainsDropdownSelectionControl',
        data() {
            
            return {
                tooltipText: this.tooltipText,
                datasrcSelection: datasourceSelection
            }
        },
        setup() {
            datasourceSelection.value = []
            return {
                datasourceSelection
            }
        },
        mounded() {
            this.tooltipText
        }
    })
    


</script>
    
<template>
    <!-- <span>asdf</span> -->




    <div class="tooltip-selection-container">
			<div class="bubble">
				<div class="tooltip-container">            
						<div class="tooltip-content">
								<span class="tooltip-text">tooltip-text</span>
						</div>
							<!-- <div class="tooltip-icon">

							</div> -->
							<div class="selection-liste">
									<ul class="liste">
											<template src="datasource-liste in option" >
													<li class="eintrag-liste">
															<div class="eintrag">
																	<div class="eintrag-icon-container">
																			<img src="../../../assets/Icons/pin.png" class="eintrag-icon-file"/>
																	</div>
																	<div class="eintrag-text">
																			<span>adsf</span>
																	</div>
																	<div class="eintrag-funtion-symbol">
																			<img src="" />
																	</div>
															</div>
													</li>
													
											</template>
									</ul>
							</div>
					</div>
			</div>
		</div>
			
        
</template>
    
<style scoped lang='scss'>

.tooltip-selection-container {
    position: relative;
    height: 100px;
    width: 300px;
    //min-height: 100px;
    //min-width: 300px;
    opacity: 1;
    //border: solid;

}

// .tooltip-selection-container:hover {

// }

.bubble {
    height: 100%;
    width: 100%;
    background-color: white;
    border: solid;
    border-width: 1px;
    border-color: rgba(200, 200, 200, 0.7);
    border-radius: 10px;
    box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.4);
}

.tooltip-container {    
    height: fit-content;
    width: fit-content;

}

// .tooltip-needle {

// }

.tooltip-content {
    width: 100%;    
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.tooltip-text {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: rgb(60, 60, 60);
    user-select: none; 
}

.selection-liste {
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 0px;
    margin-right: 0px;
    height: fit-content;
    width: 100%;
}

.liste {
    list-style: none;
    width: 100%;
}

.eintrag-liste {
    width: 100%;
    border: solid;
    border-width: 0px 1px 0px 1px;
    border-color: rgba(255, 255, 255, 0);
    background: rgb(255, 255, 255)

}

.eintrag-liste:hover { 
    background: rgba(180, 180, 180, 0.7)
}

.eintrag {
    width: 100%;
    display: grid;
    grid-template-columns: 15% 85%;
}

.eintrag-icon-container {
    gird-column: 1;
    height: fit-content;
    width: fit-content;
    margin: 1em;
    padding-left: 10px;
    padding-right: 10px;
}

.eintrag-icon-file {
    height: 20px;
    width: 20px;
}

.eintrag-text {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: rgb(60, 60, 60);
}

.eintrag-funtion-symbol {

}
</style>