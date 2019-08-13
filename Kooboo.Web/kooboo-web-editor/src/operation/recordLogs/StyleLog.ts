import { EDITOR_TYPE } from "@/common/constants";
import { ActionType } from "../ActionType";
import { Log } from "./Log";

export class StyleLog extends Log {
  value!: string;
  objectType!: string;
  ruleId!: string;
  styleId!: string;
  property!: string;
  selector!: string;
  important!: boolean;
  styleSheetUrl!: string;
  styleTagKoobooId!: string;
  KoobooId!: string;
  readonly editorType: string = EDITOR_TYPE.style;

  static createUpdate(nameOrId: string, objectType: string, value: string, property: string, koobooId: string) {
    let log = new StyleLog();
    log.action = ActionType.update;
    log.nameOrId = nameOrId;
    log.value = value;
    log.objectType = objectType;
    log.property = property;
    log.KoobooId = koobooId;
    return log;
  }

  static createCssUpdate(
    value: string,
    property: string,
    selector: string,
    styleTagKoobooId: string,
    url: string,
    important: boolean,
    nameOrId: string,
    objectType: string
  ) {
    let log = new StyleLog();
    log.action = ActionType.update;
    log.value = value;
    log.property = property;
    log.styleTagKoobooId = styleTagKoobooId;
    log.styleSheetUrl = url;
    log.selector = selector;
    log.important = important;
    log.nameOrId = nameOrId;
    log.objectType = objectType;
    return log;
  }
}
