tinymce.init({
    selector: "textarea",
    plugins:
        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
    toolbar:
        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
    tinycomments_mode: "embedded",
    tinycomments_author: "Author name",
    mergetags_list: [
        { value: "First.Name", title: "First Name" },
        { value: "Email", title: "Email" },
    ],
    ai_request: (request, respondWith) =>
        respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
        ),
});

let btn = document.querySelector("#submit");
let parent = document.querySelector("#parent");
let category = document.querySelector("#category");
btn.addEventListener("click", () => {
    let valueCategory = category.value;
    let check = true;
    if (valueCategory === "") {
        alert("vui long dien vao truong nay");
        check = false;
    }

    if (check) {
        let data = {
            id: 1,
            title: "tieu de",
            url: "",
            status: "PUBLISH",
            content: tinymce.get("mytextarea").getContent(),
            category: valueCategory,
            createdAt: "14-12-2004",
            img: "https://source.unsplash.com/random",
        };
        console.log(data);
        parent.innerHTML = data.content;
    }
});
