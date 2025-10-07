import earthMobile from "/src/images/mobile/image-deep-earth.jpg";
import arcadeMobile from "/src/images/mobile/image-night-arcade.jpg";
import soccerMobile from "/src/images/mobile/image-soccer-team.jpg";
import gridMobile from "/src/images/mobile/image-grid.jpg";
import fromUpMobile from "/src/images/mobile/image-from-above.jpg";
import pocketMobile from "/src/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "/src/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "/src/images/mobile/image-fisheye.jpg";
import earthPc from "/src/images/desktop/image-deep-earth.jpg";
import arcadePc from "/src/images/desktop/image-night-arcade.jpg";
import soccerPc from "/src/images/desktop/image-soccer-team.jpg";
import gridPc from "/src/images/desktop/image-grid.jpg";
import fromUpPc from "/src/images/desktop/image-from-above.jpg";
import pocketPc from "/src/images/desktop/image-pocket-borealis.jpg";
import curiosityPc from "/src/images/desktop/image-curiosity.jpg";
import fisheyePc from "/src/images/desktop/image-fisheye.jpg";

export const data = [
  {
    id: 1,
    name: { one: "deep", two: "earth" },
    img: { mobile: earthMobile, pc: earthPc },
  },
  {
    id: 2,
    name: { one: "night", two: "arcade" },
    img: { mobile: arcadeMobile, pc: arcadePc },
  },
  {
    id: 3,
    name: { one: "soccer", two: "team vr" },
    img: { mobile: soccerMobile, pc: soccerPc },
  },
  {
    id: 4,
    name: { one: "the", two: "grid" },
    img: { mobile: gridMobile, pc: gridPc },
  },
  {
    id: 5,
    name: { one: "from up", two: "above vr" },
    img: { mobile: fromUpMobile, pc: fromUpPc },
  },
  {
    id: 6,
    name: { one: "pocket", two: "borealis" },
    img: { mobile: pocketMobile, pc: pocketPc },
  },
  {
    id: 7,
    name: { one: "the", two: "curiosity" },
    img: { mobile: curiosityMobile, pc: curiosityPc },
  },
  {
    id: 8,
    name: { one: "make it", two: "fisheye" },
    img: { mobile: fisheyeMobile, pc: fisheyePc },
  },
];
