import {
  AbstractWidgetProps,
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  WidgetState,
} from "@bentley/ui-abstract";
import { FillCentered } from "@bentley/ui-core";
import React from "react";
import { UserInfoWidget } from "./UserInfoWidget";

export class UserInfoProvider implements UiItemsProvider {
  public readonly id = "UserInfoProvider";

  public provideWidgets(
    stageId: string,
    _stageUsage: string,
    location: StagePanelLocation,
    section?: StagePanelSection
  ): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];
    if (
      stageId === "DefaultFrontstage" &&
      location === StagePanelLocation.Right &&
      section === StagePanelSection.End
    ) {
      widgets.push({
        id: "userInfoWidget",
        label: "User Info",
        defaultState: WidgetState.Open,
        getWidgetContent: () => (
          <FillCentered>
            <UserInfoWidget />
          </FillCentered>
        ),
      });
    }
    return widgets;
  }
}
