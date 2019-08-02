import context from "@/common/context";
import { SelectedDomEventArgs } from "@/events/SelectedDomEvent";
import EditItem from "@/components/floatMenu/items/edit";
import { KoobooComment } from "@/kooboo/KoobooComment";
import { Menu } from "@/components/floatMenu/menu";

describe("edit", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("EditItem_update", () => {
    document.body.innerHTML = `
        <!--#kooboo--objecttype='view'--nameorid='member'--boundary='154'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <!--#kooboo--objecttype='htmlblock'--nameorid='test1'--boundary='155'-->
                <h2 class="title" kooboo-id="1-0-1-1-1-1-1">平等，责任</h2>
                <!--#kooboo--end='true'--objecttype='htmlblock'--boundary='155'-->
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end='true'--objecttype='view'--boundary='154'-->
        `;

    let elementObject = new EditItem(new Menu);
    expect(elementObject.el.style.display).toEqual("");

    // 不能是body元素
    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(document.body as HTMLElement);
    let comments = KoobooComment.getComments(document.body);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("none");

    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(document.body.children[0].children[0].children[0] as HTMLElement);
    comments = KoobooComment.getComments(document.body.children[0].children[0].children[0]);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("block");
  });

  test("EditItem_update_noExistInEditType", () => {
    document.body.innerHTML = `
        <!--#kooboo--objecttype='contentrepeater'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--folderid='ffa232c4-ca49-9c07-8b43-fd30d5ec5e8b'--bindingvalue='List_Item'--boundary='171'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <h2 kooboo-id="1-0-1-1-1-1-3">Mailaaaa</h2>
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='171'-->
        `;

    let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

    let elementObject = new EditItem(new Menu);
    expect(elementObject.el.style.display).toEqual("");

    let comments = KoobooComment.getComments(document.body.children[0].children[0].children[0]);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("none");
  });

  test("EditItem_update_existInRepeatType", () => {
    document.body.innerHTML = `
        <!--#kooboo--objecttype='view'--nameorid='member'--boundary='154'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <!--#kooboo--objecttype='contentrepeater'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--folderid='ffa232c4-ca49-9c07-8b43-fd30d5ec5e8b'--bindingvalue='List_Item'--boundary='171'-->
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <h2 class="title" kooboo-id="1-0-1-1-1-1-1">平等，责任</h2>
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
            <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='171'-->
        </div>
        <!--#kooboo--end='true'--objecttype='view'--boundary='154'-->
        `;

    let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

    let elementObject = new EditItem(new Menu);
    expect(elementObject.el.style.display).toEqual("");

    let comments = KoobooComment.getComments(document.body.children[0].children[0].children[0]);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("block");
  });

  test("EditItem_update_noEditElement", () => {
    document.body.innerHTML = `
        <!--#kooboo--objecttype='view'--nameorid='member'--boundary='154'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <!--#kooboo--objecttype='htmlblock'--nameorid='test1'--boundary='155'-->
                <area class="title" kooboo-id="1-0-1-1-1-1-1">平等，责任</area>
                <!--#kooboo--end='true'--objecttype='htmlblock'--boundary='155'-->
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end='true'--objecttype='view'--boundary='154'-->
        `;

    let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

    let elementObject = new EditItem(new Menu);
    expect(elementObject.el.style.display).toEqual("");

    let comments = KoobooComment.getComments(document.body.children[0].children[0].children[0]);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("none");
  });

  test("EditItem_update_existOtherElement", () => {
    document.body.innerHTML = `
        <!--#kooboo--objecttype='view'--nameorid='member'--boundary='154'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <!--#kooboo--objecttype='htmlblock'--nameorid='test1'--boundary='155'-->
                <div>
                    <!--#kooboo--objecttype='contentrepeater'--nameorid='cf41fed8-d56c-4b97-9c09-594d3e01c865'--folderid='4b507243-a096-1a79-3247-345641080783'--bindingvalue='ListItem'--boundary='169'-->
                    <div kooboo-id="1-0-1-1-3">
                    </div>
                    <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='169'-->
                </div>
                <!--#kooboo--end='true'--objecttype='htmlblock'--boundary='155'-->
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end='true'--objecttype='view'--boundary='154'-->
        `;

    let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

    context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

    let elementObject = new EditItem(new Menu);
    expect(elementObject.el.style.display).toEqual("");

    let comments = KoobooComment.getComments(document.body.children[0].children[0].children[0]);
    elementObject.update(comments);
    expect(elementObject.el.style.display).toEqual("none");
  });
});
