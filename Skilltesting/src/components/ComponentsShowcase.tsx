

import { AtmWithdrawalButtons } from "./AtmWithdrawalButtons"
import { BarState } from "./BarState"
import { CircularChartCount } from "./CircularChartCount"
import { Dates } from "./Dates"
import { ModalListItem } from "./ModalListItem"
import { RadioButton } from "./RadioButton"
import { TabItem } from "./TabItem"
import { ToogleTabItem } from "./ToogleTabItem"
import { Buttons } from "./Buttons"

export default function ComponentsShowcase() {
  return (
    <div className="components-showcase flex flex-col gap-12 p-10 bg-[#f4f4f4] min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-[#090909] mb-2">Components Showcase</h1>
        <p className="text-[#666666]">All components with their available variants</p>
      </div>

      {/* Buttons Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] ">
        <h2 className="text-2xl font-bold text-[#090909]">Buttons</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Small - Default</span>
            <Buttons size="small" states="default" placeholder="Small" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Medium - Pressed</span>
            <Buttons size="medium" states="pressed" placeholder="Medium" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Large - Disabled</span>
            <Buttons size="large" states="disabled" placeholder="Large" />
          </div>
        </div>
      </section>

      

        

      {/* ATM Withdrawal Buttons Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">ATM Withdrawal Buttons</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Default</span>
            <AtmWithdrawalButtons state="default" amount="$ 20.000" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Pressed</span>
            <AtmWithdrawalButtons state="pressed" amount="$ 50.000" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Default - Different Amount</span>
            <AtmWithdrawalButtons state="default" amount="$ 100.000" />
          </div>
        </div>
      </section>

      {/* Bar State Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Bar State</h2>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Selected</span>
            <BarState state="selected" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Inactive</span>
            <BarState state="inactive" />
          </div>
        </div>
      </section>

      {/* Circular Chart Count Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Circular Chart Count</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Item Count: 5</span>
            <CircularChartCount itemCount="5" label="Total" moneyNumber="$ 5.000.000,00" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Item Count: 4</span>
            <CircularChartCount itemCount="4" label="Completed" moneyNumber="$ 3.500.000,00" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Item Count: 3</span>
            <CircularChartCount itemCount="3" label="Pending" moneyNumber="$ 2.000.000,00" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Item Count: 2</span>
            <CircularChartCount itemCount="2" label="Failed" moneyNumber="$ 1.000.000,00" />
          </div>
        </div>
      </section>

      {/* Dates Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Dates</h2>
        <div className="flex gap-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
            <div key={`default-${day}`} className="flex flex-col gap-2">
              <span className="text-xs text-[#666666]">Default</span>
              <Dates state="default">{day}</Dates>
            </div>
          ))}
          {[11, 12, 13, 14, 15].map((day) => (
            <div key={`active-${day}`} className="flex flex-col gap-2">
              <span className="text-xs text-[#666666]">Active</span>
              <Dates state="active">{day}</Dates>
            </div>
          ))}
        </div>
      </section>

      {/* Modal List Item Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Modal List Item</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Default</span>
            <ModalListItem state="default" placeholderText="List Item 1" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Pressed</span>
            <ModalListItem state="pressed" placeholderText="List Item 2" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Default - Another Item</span>
            <ModalListItem state="default" placeholderText="List Item 3" />
          </div>
        </div>
      </section>

      {/* Radio Button Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Radio Button</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Default</span>
            <RadioButton state="default" title="Option 1" description="Select this option" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Pressed</span>
            <RadioButton state="pressed" title="Option 2" description="This option is selected" descriptionLabel={true} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Disabled</span>
            <RadioButton state="disabled" title="Option 3" description="This option is disabled" />
          </div>
        </div>
      </section>

      {/* Tab Item Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Tab Item</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Small - Selected</span>
            <div className="flex gap-2">
              <TabItem size="small" state="selected" label="Tab 1" />
              <TabItem size="small" state="default" label="Tab 2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Small - Disabled</span>
            <div className="flex gap-2">
              <TabItem size="small" state="disabled" label="Tab 1" />
              <TabItem size="small" state="disabled" label="Tab 2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Large - Selected</span>
            <div className="flex gap-2">
              <TabItem size="large" state="selected" label="Tab 1" />
              <TabItem size="large" state="default" label="Tab 2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Large - Disabled</span>
            <div className="flex gap-2">
              <TabItem size="large" state="disabled" label="Tab 1" />
              <TabItem size="large" state="disabled" label="Tab 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Toogle Tab Item Component */}
      <section className="flex flex-col gap-4 bg-white p-8 rounded-[10px] shadow-sm">
        <h2 className="text-2xl font-bold text-[#090909]">Toggle Tab Item</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Inactive</span>
            <ToogleTabItem state="inactive" title="Inactive" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Hovered</span>
            <ToogleTabItem state="hovered" title="Hovered" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#666666]">Selected</span>
            <ToogleTabItem state="selected" title="Selected" />
          </div>
        </div>
      </section>
    </div>
  );
}
