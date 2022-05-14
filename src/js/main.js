//main.js file

const getOwlItemIndex = (e) => {
    if (e.item) {
        var index = e.item.index + 1;
        var count = e.item.count;
        if (index > count) {
            index -= count;
        }
        if (index <= 0) {
            index += count;
        }
        return index;
    }
};
const updateProgress = (owlName) => (e) => {
    const count = ('0' + e.item.count).slice(-2);
    const pageNumber = ('0' + getOwlItemIndex(e)).slice(-2);
    const progressEl = $(`[data-owl-progress]`);
    const targetOwlName = progressEl.attr("data-owl-name");
    if (targetOwlName === owlName) {
        progressEl.text(`${pageNumber}/${count}`);
    }
};

const tableOwlSetup = () => {
    let tableOwl = $(".tableOwl").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        items: 1,
        onInitialized: (e) => {
            console.log("initialized");
            updateProgress("tableOwl")(e);
        },
        onChanged: updateProgress("tableOwl"),
    });

    $("[data-owl-next]").click(function (e) {
        let targetOwlSelector = $(this).attr("data-owl-target");
        $(targetOwlSelector).trigger("next.owl.carousel");
    });
    $("[data-owl-prev]").click(function (e) {
        let targetOwlSelector = $(this).attr("data-owl-target");
        $(targetOwlSelector).trigger("prev.owl.carousel");
    });
};

$(document).ready(function () {
    tableOwlSetup();
});
