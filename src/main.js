import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({ background: "#000000" });

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("image", "sprites/image.png");

const character = k.add([k.pos(120, 80),
    k.sprite("image")

]);

k.onKeyDown("right", () => {
    character.move(100, 0);
});
k.onKeyDown("left", () => {
    character.move(-100, 0);
});
k.onKeyDown("up", () => {
    character.move(0, -100);
});
k.onKeyDown("down", () => {
    character.move(0, 100);
});

k.onClick(() => k.addKaboom(k.mousePos()));