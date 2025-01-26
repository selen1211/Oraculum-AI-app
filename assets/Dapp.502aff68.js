import {
  d as he,
  h as fe,
  _ as k,
  r,
  o as l,
  c as u,
  a as x,
  b as n,
  t as f,
  e as g,
  w as B,
  n as I,
  m as S,
  f as C,
  B as w,
  g as T,
  i as c,
  j as A,
  k as pe,
  l as R,
  p as _e,
  q as ge,
  s as ke,
  u as ve,
  v as Z,
  F as L,
  x as z,
  y as be,
  z as ye,
  A as V,
  C as U,
  D as we,
  E as le,
  G as xe,
  H as N,
  I as Ce,
} from "./index.92fedfc2.js";
import { B as M } from "./Button.61a212de.js";
/*! vue-countdown v2.1.1 | (c) 2018-present Chen Fengyuan | MIT */ const O = 1e3,
  F = 60 * O,
  q = 60 * F,
  X = 24 * q,
  ee = "abort",
  te = "end",
  ne = "progress",
  se = "start",
  oe = "visibilitychange";
var $e = he({
  name: "VueCountdown",
  props: {
    autoStart: { type: Boolean, default: !0 },
    emitEvents: { type: Boolean, default: !0 },
    interval: { type: Number, default: 1e3, validator: (e) => e >= 0 },
    now: { type: Function, default: () => Date.now() },
    tag: { type: String, default: "span" },
    time: { type: Number, default: 0, validator: (e) => e >= 0 },
    transform: { type: Function, default: (e) => e },
  },
  emits: [ee, te, ne, se],
  data() {
    return { counting: !1, endTime: 0, totalMilliseconds: 0, requestId: 0 };
  },
  computed: {
    days() {
      return Math.floor(this.totalMilliseconds / X);
    },
    hours() {
      return Math.floor((this.totalMilliseconds % X) / q);
    },
    minutes() {
      return Math.floor((this.totalMilliseconds % q) / F);
    },
    seconds() {
      return Math.floor((this.totalMilliseconds % F) / O);
    },
    milliseconds() {
      return Math.floor(this.totalMilliseconds % O);
    },
    totalDays() {
      return this.days;
    },
    totalHours() {
      return Math.floor(this.totalMilliseconds / q);
    },
    totalMinutes() {
      return Math.floor(this.totalMilliseconds / F);
    },
    totalSeconds() {
      return Math.floor(this.totalMilliseconds / O);
    },
  },
  watch: {
    $props: {
      deep: !0,
      immediate: !0,
      handler() {
        (this.totalMilliseconds = this.time),
          (this.endTime = this.now() + this.time),
          this.autoStart && this.start();
      },
    },
  },
  mounted() {
    document.addEventListener(oe, this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener(oe, this.handleVisibilityChange), this.pause();
  },
  methods: {
    start() {
      this.counting ||
        ((this.counting = !0),
        this.emitEvents && this.$emit(se),
        document.visibilityState === "visible" && this.continue());
    },
    continue() {
      if (!this.counting) return;
      const e = Math.min(this.totalMilliseconds, this.interval);
      if (e > 0) {
        let t, s;
        const p = (a) => {
          t || (t = a), s || (s = a);
          const o = a - t;
          o >= e || o + (a - s) / 2 >= e
            ? this.progress()
            : (this.requestId = requestAnimationFrame(p)),
            (s = a);
        };
        this.requestId = requestAnimationFrame(p);
      } else this.end();
    },
    pause() {
      cancelAnimationFrame(this.requestId);
    },
    progress() {
      !this.counting ||
        (this.update(),
        this.emitEvents &&
          this.totalMilliseconds > 0 &&
          this.$emit(ne, {
            days: this.days,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
            totalDays: this.totalDays,
            totalHours: this.totalHours,
            totalMinutes: this.totalMinutes,
            totalSeconds: this.totalSeconds,
            totalMilliseconds: this.totalMilliseconds,
          }),
        this.continue());
    },
    abort() {
      !this.counting ||
        (this.pause(), (this.counting = !1), this.emitEvents && this.$emit(ee));
    },
    end() {
      !this.counting ||
        (this.pause(),
        (this.totalMilliseconds = 0),
        (this.counting = !1),
        this.emitEvents && this.$emit(te));
    },
    update() {
      this.counting &&
        (this.totalMilliseconds = Math.max(0, this.endTime - this.now()));
    },
    restart() {
      this.pause(),
        (this.totalMilliseconds = this.time),
        (this.endTime = this.now() + this.time),
        (this.counting = !1),
        this.start();
    },
    handleVisibilityChange() {
      switch (document.visibilityState) {
        case "visible":
          this.update(), this.continue();
          break;
        case "hidden":
          this.pause();
          break;
      }
    },
  },
  render() {
    return fe(
      this.tag,
      this.$slots.default
        ? [
            this.$slots.default(
              this.transform({
                days: this.days,
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds,
                milliseconds: this.milliseconds,
                totalDays: this.totalDays,
                totalHours: this.totalHours,
                totalMinutes: this.totalMinutes,
                totalSeconds: this.totalSeconds,
                totalMilliseconds: this.totalMilliseconds,
              })
            ),
          ]
        : void 0
    );
  },
});
const Se = {
    name: "Info",
    components: { VueCountdown: $e },
    props: {
      icon: String,
      value: [String, Number],
      title: String,
      timeUnix: [String, Number],
      col: { type: Boolean, default: !1 },
    },
  },
  Me = ["src"],
  Ie = { class: "flex flex-col" },
  Be = { class: "lg:text-lg text-base font-bold" },
  Te = { class: "lg:text-lg text-base font-bold" },
  Ee = { class: "lg:text-base text-sm font-medium text-white text-opacity-75" };
function Re(e, t, s, p, a, o) {
  const i = r("vue-countdown");
  return (
    l(),
    u(
      "div",
      {
        class: I([
          "gap-3 w-full",
          {
            "flex items-center": !s.col,
            "flex flex-row lg:flex-col items-center lg:items-start": s.col,
          },
        ]),
      },
      [
        s.icon
          ? (l(),
            u(
              "img",
              {
                key: 0,
                src: s.icon,
                alt: "",
                class: "lg:h-10 lg:w-10 w-8 h-8",
              },
              null,
              8,
              Me
            ))
          : x("", !0),
        n("div", Ie, [
          n("h1", Be, f(s.value), 1),
          s.timeUnix
            ? (l(),
              g(
                i,
                { key: 0, time: s.timeUnix },
                {
                  default: B(
                    ({ days: m, hours: d, minutes: v, seconds: h }) => [
                      n(
                        "h1",
                        Te,
                        f(m) + "D " + f(d) + "H " + f(v) + "M " + f(h) + "S ",
                        1
                      ),
                    ]
                  ),
                  _: 1,
                },
                8,
                ["time"]
              ))
            : x("", !0),
          n("h2", Ee, f(s.title), 1),
        ]),
      ],
      2
    )
  );
}
const D = k(Se, [["render", Re]]),
  Pe = "/img/eth.png",
  Ne = {
    name: "EthRewards",
    components: { Info: D, Button: M },
    computed: {
      ...S(["allPools", "isConnected"]),
      totalRewardsETHFormatted() {
        return (
          (this.allPools &&
            C(
              this.allPools
                .reduce((e, t) => e.plus(t.main.totalRewards), new w(0))
                .div(new w(10).pow(18))
            )) ||
          0
        );
      },
    },
    methods: { ...T(["init"]) },
  },
  Le = {
    class:
      "bg-reward rounded-xl w-full flex flex-col items-start py-4 px-2.5 gap-2.5",
  },
  Ae = n(
    "div",
    { class: "flex items-center gap-3" },
    [
      n("img", { src: Pe, alt: "", class: "h-8 w-auto" }),
      n("h1", { class: "text-lg font-bold" }, "ETH Rewards"),
    ],
    -1
  ),
  De = n(
    "p",
    { class: "text-sm text-white text-opacity-75" },
    "Earn ETH by staking!",
    -1
  );
function He(e, t, s, p, a, o) {
  const i = r("Info");
  return (
    l(),
    u("div", Le, [
      Ae,
      De,
      c(
        i,
        {
          value: `${o.totalRewardsETHFormatted} ETH`,
          title: "Total ETH Rewarded",
        },
        null,
        8,
        ["value"]
      ),
    ])
  );
}
const ae = k(Ne, [["render", He]]),
  Ve = "/img/share.png",
  Ue = {
    name: "EthRewards",
    components: { Info: D, Button: M },
    computed: { ...S(["symbol"]) },
  },
  Oe = {
    class:
      "mt-5 rounded-xl w-full flex flex-col items-start py-4 px-2.5 gap-2.5 border border-gray-1 border-opacity-30",
  },
  Fe = n(
    "div",
    { class: "flex items-center gap-3" },
    [
      n("img", { src: Ve, alt: "", class: "h-5 w-auto" }),
      n("h1", { class: "text-lg font-bold" }, "Referral Rewards"),
    ],
    -1
  );
function qe(e, t, s, p, a, o) {
  const i = r("Info"),
    m = r("Button");
  return (
    l(),
    u("div", Oe, [
      Fe,
      c(i, { value: `24,044 ${e.symbol}`, title: "Total Reward" }, null, 8, [
        "value",
      ]),
      c(m, { text: "Get Link", class: "w-full", xs: "" }),
    ])
  );
}
const ie = k(Ue, [["render", qe]]),
  Y = "/img/logo.svg",
  je = {
    name: "Balance",
    computed: {
      ...S(["symbol"]),
      ...A({
        decimals: ({ main: e }) => (e.paalInfo && e.paalInfo.decimals) || 18,
        userBal: ({ main: e }) =>
          (e.userPaalInfo && e.userPaalInfo.balance) || 0,
      }),
      userBalanceFormatted() {
        return (
          (this.decimals &&
            this.userBal &&
            C(new w(this.userBal).div(new w(10).pow(this.decimals)))) ||
          0
        );
      },
    },
  },
  We = { class: "flex items-center gap-3" },
  Ze = n("img", { src: Y, alt: "", class: "h-10 w-10" }, null, -1),
  ze = { class: "flex flex-col" },
  Ge = { class: "text-sm text-white text-opacity-75" },
  Ye = { class: "text-base font-bold" };
function Ke(e, t, s, p, a, o) {
  return (
    l(),
    u("div", We, [
      Ze,
      n("div", ze, [
        n("h1", Ge, f(e.symbol) + " Balance ", 1),
        n("h2", Ye, f(o.userBalanceFormatted) + " " + f(e.symbol), 1),
      ]),
    ])
  );
}
const re = k(je, [["render", Ke]]),
  Je = {},
  Qe = {
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Xe = n(
    "path",
    {
      d: "M9.10416 11.0833C8.78922 11.0833 8.48717 11.2085 8.26447 11.4312C8.04178 11.6539 7.91666 11.9559 7.91666 12.2708C7.91666 12.5858 8.04178 12.8878 8.26447 13.1105C8.48717 13.3332 8.78922 13.4583 9.10416 13.4583H15.4375C15.7524 13.4583 16.0545 13.3332 16.2772 13.1105C16.4999 12.8878 16.625 12.5858 16.625 12.2708C16.625 11.9559 16.4999 11.6539 16.2772 11.4312C16.0545 11.2085 15.7524 11.0833 15.4375 11.0833H9.10416Z",
      fill: "white",
    },
    null,
    -1
  ),
  et = n(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M33.5477 12.673C33.4495 12.6667 33.3418 12.6667 33.231 12.6667H28.8404C25.2447 12.6667 22.1667 15.4153 22.1667 19C22.1667 22.5847 25.2447 25.3333 28.8404 25.3333H33.231C33.3418 25.3333 33.4495 25.3333 33.5477 25.327C35.0091 25.2383 36.3011 24.1284 36.4103 22.5767C36.4167 22.4754 36.4167 22.3662 36.4167 22.2648V15.7352C36.4167 15.6338 36.4167 15.5246 36.4103 15.4232C36.3011 13.8716 35.0091 12.7632 33.5477 12.673ZM28.4541 20.6894C29.3787 20.6894 30.1292 19.9326 30.1292 19C30.1292 18.0658 29.3787 17.3106 28.4541 17.3106C27.5278 17.3106 26.7757 18.0674 26.7757 19C26.7757 19.9342 27.5278 20.6894 28.4541 20.6894Z",
      fill: "#9A1BCA",
    },
    null,
    -1
  ),
  tt = n(
    "path",
    {
      opacity: "0.5",
      d: "M33.4717 12.6698C33.4717 10.7999 33.402 8.79383 32.2082 7.35775C32.0915 7.21707 31.9684 7.08181 31.8392 6.95242C30.6533 5.76808 29.1507 5.24242 27.2951 4.99225C25.4901 4.75 23.1863 4.75 20.2762 4.75H16.9322C14.022 4.75 11.7167 4.75 9.91166 4.99225C8.056 5.24242 6.55341 5.76808 5.3675 6.95242C4.18316 8.13833 3.6575 9.64092 3.40733 11.4966C3.16666 13.3016 3.16666 15.6053 3.16666 18.5155V18.6928C3.16666 21.603 3.16666 23.9083 3.40891 25.7118C3.65908 27.5674 4.18475 29.07 5.36908 30.2559C6.555 31.4403 8.05758 31.9659 9.91325 32.2161C11.7182 32.4583 14.022 32.4583 16.9322 32.4583H20.2762C23.1863 32.4583 25.4917 32.4583 27.2951 32.2161C29.1507 31.9659 30.6533 31.4403 31.8392 30.2559C32.1547 29.9395 32.434 29.589 32.6721 29.2109C33.3846 28.0709 33.4701 26.6744 33.4701 25.3317L33.2326 25.3333H28.8404C25.2447 25.3333 22.1667 22.5847 22.1667 19C22.1667 15.4153 25.2447 12.6667 28.8404 12.6667H33.231C33.3133 12.6667 33.3957 12.6667 33.4717 12.6698Z",
      fill: "#A11DCF",
    },
    null,
    -1
  ),
  nt = [Xe, et, tt];
function st(e, t) {
  return l(), u("svg", Qe, nt);
}
const ot = k(Je, [["render", st]]),
  lt = {
    name: "Wallet",
    components: { IconWallet: ot },
    computed: { ...S(["userAddress"]) },
    methods: { getShortAddress: pe },
  },
  at = { class: "flex items-center gap-3" },
  it = { class: "text-base font-bold" };
function rt(e, t, s, p, a, o) {
  const i = r("IconWallet");
  return (
    l(),
    u("div", at, [c(i), n("h1", it, f(o.getShortAddress(e.userAddress)), 1)])
  );
}
const de = k(lt, [["render", rt]]),
  dt = {
    name: "Sidebar",
    components: {
      EthRewards: ae,
      ReferralRewards: ie,
      Button: M,
      Balance: re,
      Wallet: de,
    },
    computed: { ...S(["isConnected"]) },
    methods: { ...T(["init", "disconnect"]) },
  },
  ct = {
    class:
      "flex flex-col h-full w-full md:max-w-266 max-w-none bg-violet md:py-8 py-4 px-4 items-center md:fixed relative",
  },
  ut = n(
    "div",
    {
      class:
        "flex items-center justify-start w-full gap-1 border-b border-gray-1 border-opacity-30 pb-5",
    },
    [
      n("img", { src: Y, alt: "", class: "h-10 w-10" }),
      n("h1", null, "Oraculum AI"),
      n("h1", { class: "block md:hidden -ml-3" }, "Staking"),
    ],
    -1
  );
function mt(e, t, s, p, a, o) {
  const i = r("Balance"),
    m = r("Wallet"),
    d = r("EthRewards");
  return (
    l(),
    u("div", ct, [
      ut,
      e.isConnected
        ? (l(), g(i, { key: 0, class: "mt-5 mr-auto lg:hidden block" }))
        : x("", !0),
      e.isConnected
        ? (l(), g(m, { key: 1, class: "mt-5 mr-auto lg:hidden block" }))
        : x("", !0),
      c(d, { class: "mt-5" }),
    ])
  );
}
const ht = k(dt, [["render", mt]]),
  ft = {
    name: "Header",
    components: { Balance: re, Wallet: de, Button: M },
    computed: { ...S(["isConnected"]) },
    methods: { ...T(["init", "disconnect"]) },
  },
  pt = { class: "md:flex hidden items-center justify-between" },
  _t = n("h1", { class: "text-xxl font-bold leading-normal" }, "Staking", -1),
  gt = { class: "flex items-center gap-10" };
function kt(e, t, s, p, a, o) {
  const i = r("Balance"),
    m = r("Wallet"),
    d = r("Button");
  return (
    l(),
    u("div", pt, [
      _t,
      n("div", gt, [
        e.isConnected
          ? (l(), g(i, { key: 0, class: "hidden lg:flex" }))
          : x("", !0),
        e.isConnected
          ? (l(), g(m, { key: 1, class: "hidden lg:flex" }))
          : x("", !0),
        e.isConnected
          ? x("", !0)
          : (l(),
            g(d, { key: 2, text: "Connect Wallet", onClick: e.init }, null, 8, [
              "onClick",
            ])),
        e.isConnected
          ? (l(),
            g(
              d,
              { key: 3, text: "Disconnect Wallet", onClick: e.disconnect },
              null,
              8,
              ["onClick"]
            ))
          : x("", !0),
      ]),
    ])
  );
}
const vt = k(ft, [["render", kt]]),
  bt = {
    name: "Row",
    props: { title: String, subTitle: String, referral: Boolean },
  },
  yt = { class: "flex items-center justify-between w-full" },
  wt = { class: "flex flex-col" },
  xt = { class: "lg:text-xxl text-lg font-bold leading-normal" },
  Ct = { class: "lg:text-lg text-sm font-medium" };
function $t(e, t, s, p, a, o) {
  return (
    l(),
    u(
      "div",
      {
        class: I({
          "flex flex-col w-full items-start gap-5": !s.referral,
          "flex md:hidden flex-col w-full items-start gap-5": s.referral,
        }),
      },
      [
        n("div", yt, [
          n("div", wt, [
            n("h1", xt, f(s.title), 1),
            n("p", Ct, f(s.subTitle), 1),
          ]),
          R(e.$slots, "button"),
        ]),
        R(e.$slots, "default"),
      ],
      2
    )
  );
}
const St = k(bt, [["render", $t]]),
  Mt = { name: "Block", props: { primary: { type: Boolean, default: !0 } } };
function It(e, t, s, p, a, o) {
  return (
    l(),
    u(
      "div",
      {
        class: I([
          "w-full border border-gray-1 border-opacity-30 rounded-xl lg:px-6 px-3 py-5 relative",
          { "bg-violet-4": s.primary, "bg-violet-6 bg-opacity-75": !s.primary },
        ]),
      },
      [R(e.$slots, "default")],
      2
    )
  );
}
const ce = k(Mt, [["render", It]]),
  Bt = { name: "ProgressBar", props: { percentage: [String, Number] } },
  Tt = { class: "w-full rounded-full bg-violet-3 h-2.5" };
function Et(e, t, s, p, a, o) {
  return (
    l(),
    u("div", Tt, [
      n(
        "div",
        {
          class: "rounded-full h-full bg-violet-1",
          style: _e({ width: s.percentage }),
        },
        null,
        4
      ),
    ])
  );
}
const ue = k(Bt, [["render", Et]]),
  Rt = {},
  Pt = {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Nt = n(
    "g",
    { "clip-path": "url(#clip0_90_503)" },
    [
      n("path", {
        d: "M18.75 0.0999756H2.24998C1.81237 0.0999756 1.39268 0.273814 1.08325 0.583249C0.773814 0.892684 0.599976 1.31237 0.599976 1.74998V18.25C0.599976 18.6876 0.773814 19.1073 1.08325 19.4167C1.39268 19.7261 1.81237 19.9 2.24998 19.9H18.75C19.1876 19.9 19.6073 19.7261 19.9167 19.4167C20.2261 19.1073 20.4 18.6876 20.4 18.25V1.74998C20.4 1.31237 20.2261 0.892684 19.9167 0.583249C19.6073 0.273814 19.1876 0.0999756 18.75 0.0999756ZM16.0337 14.3663C16.1103 14.4429 16.1711 14.5339 16.2126 14.6341C16.2541 14.7342 16.2754 14.8416 16.2754 14.95C16.2754 15.0584 16.2541 15.1657 16.2126 15.2659C16.1711 15.366 16.1103 15.457 16.0337 15.5337C15.957 15.6103 15.866 15.6711 15.7659 15.7126C15.6657 15.7541 15.5584 15.7754 15.45 15.7754C15.3416 15.7754 15.2342 15.7541 15.1341 15.7126C15.0339 15.6711 14.9429 15.6103 14.8663 15.5337L10.5 11.1663L6.13366 15.5337C5.97886 15.6885 5.7689 15.7754 5.54998 15.7754C5.33105 15.7754 5.12109 15.6885 4.96629 15.5337C4.81148 15.3789 4.72452 15.1689 4.72452 14.95C4.72452 14.7311 4.81148 14.5211 4.96629 14.3663L9.33363 9.99998L4.96629 5.63366C4.81148 5.47886 4.72452 5.2689 4.72452 5.04998C4.72452 4.83105 4.81148 4.62109 4.96629 4.46629C5.12109 4.31148 5.33105 4.22452 5.54998 4.22452C5.7689 4.22452 5.97886 4.31148 6.13366 4.46629L10.5 8.83363L14.8663 4.46629C15.0211 4.31148 15.2311 4.22452 15.45 4.22452C15.6689 4.22452 15.8789 4.31148 16.0337 4.46629C16.1885 4.62109 16.2754 4.83105 16.2754 5.04998C16.2754 5.2689 16.1885 5.47886 16.0337 5.63366L11.6663 9.99998L16.0337 14.3663Z",
        fill: "#6D28D9",
      }),
    ],
    -1
  ),
  Lt = n(
    "defs",
    null,
    [
      n("clipPath", { id: "clip0_90_503" }, [
        n("rect", {
          width: "20",
          height: "20",
          fill: "white",
          transform: "translate(0.5)",
        }),
      ]),
    ],
    -1
  ),
  At = [Nt, Lt];
function Dt(e, t) {
  return l(), u("svg", Pt, At);
}
const Ht = k(Rt, [["render", Dt]]),
  Vt = {
    name: "Modal",
    components: { IconModalClose: Ht },
    props: {
      title: { type: String },
      subText: { type: String },
      large: { type: Boolean },
      noPadding: { type: Boolean },
      blank: { type: Boolean },
    },
    data() {
      return {};
    },
  },
  Ut = {
    class: "fixed z-20 w-full",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
  },
  Ot = n(
    "div",
    { class: "fixed inset-0 transition-opacity bg-violet-5 bg-opacity-75" },
    null,
    -1
  ),
  Ft = { class: "fixed inset-0 z-10 overflow-y-auto" },
  qt = {
    class:
      "w-full flex h-full items-start justify-center p-4 text-center sm:items-start sm:p-0",
  },
  jt = { class: "relative flex items-start justify-start w-full" },
  Wt = { key: 0, class: "font-bold text-base text-left dark:text-white" },
  Zt = { class: "flex flex-col pb-3" },
  zt = { key: 0, class: "mt-3 text-md md:text-center sm:mt-2 text-gray-600" },
  Gt = { class: "mt-4" };
function Yt(e, t, s, p, a, o) {
  const i = r("IconModalClose");
  return (
    l(),
    u("div", Ut, [
      Ot,
      n("div", Ft, [
        n("div", qt, [
          n(
            "div",
            {
              class: I([
                "relative text-left transition-all transform rounded-lg shadow-xl w-full my-auto",
                {
                  "sm:max-w-xl": !s.large,
                  "sm:max-w-3xl": s.large,
                  "p-5 sm:px-5": !s.noPadding,
                  "bg-modal border border-gray-1 border-opacity-30": !s.blank,
                },
              ]),
            },
            [
              n("div", jt, [
                s.title ? (l(), u("h1", Wt, f(s.title), 1)) : x("", !0),
                n(
                  "button",
                  {
                    class: "absolute inset-y-0 right-0",
                    onClick: t[0] || (t[0] = (m) => e.$emit("close")),
                  },
                  [c(i, { class: "h-5 w-5" })]
                ),
              ]),
              n("div", Zt, [
                s.subText ? (l(), u("h3", zt, f(s.subText), 1)) : x("", !0),
                n("div", Gt, [R(e.$slots, "default")]),
              ]),
            ],
            2
          ),
        ]),
      ]),
    ])
  );
}
const K = k(Vt, [["render", Yt]]),
  Kt = {
    name: "Input",
    components: { Button: M },
    props: {
      modelValue: [String, Number],
      placeholder: String,
      showBalance: { type: Boolean, default: !0 },
      balance: [String, Number],
    },
    computed: { ...S(["symbol"]) },
    methods: {
      updateInput(e) {
        this.$emit("update:modelValue", e.target.value);
      },
      setToMax() {
        this.updateInput({ target: { value: this.balance } });
      },
    },
  },
  Jt = { class: "flex flex-col gap-3" },
  Qt = { class: "relative" },
  Xt = ["value", "placeholder"],
  en = { key: 0, class: "flex items-center gap-2" },
  tn = n("img", { src: Y, alt: "", class: "h-5 w-5" }, null, -1),
  nn = { class: "text-white text-opacity-75 text-sm font-medium" },
  sn = { class: "text-white text-sm font-medium" };
function on(e, t, s, p, a, o) {
  const i = r("Button");
  return (
    l(),
    u("div", Jt, [
      n("div", Qt, [
        n(
          "input",
          {
            type: "number",
            value: s.modelValue,
            placeholder: s.placeholder,
            onInput:
              t[0] || (t[0] = (...m) => o.updateInput && o.updateInput(...m)),
            class:
              "bg-violet-7 w-full rounded text-white text-base py-4 pl-5 pr-28 outline-none [&::-webkit-inner-spin-button]:appearance-none",
          },
          null,
          40,
          Xt
        ),
        c(
          i,
          {
            onClick: o.setToMax,
            text: "Max",
            class: "absolute right-5 top-2",
            xs: "",
          },
          null,
          8,
          ["onClick"]
        ),
      ]),
      s.showBalance
        ? (l(),
          u("div", en, [
            tn,
            n("h1", nn, f(e.symbol) + " Balance: ", 1),
            n("h1", sn, f(s.balance) + " " + f(e.symbol), 1),
          ]))
        : x("", !0),
      R(e.$slots, "default"),
    ])
  );
}
const J = k(Kt, [["render", on]]);
const ln = {
    name: "Loader",
    components: {},
    props: {
      title: { type: String },
      fullscreen: { type: Boolean },
      small: Boolean,
      height: { type: [Number, String], default: 150 },
      width: { type: [Number, String], default: 150 },
    },
    data() {
      return {};
    },
  },
  an = (e) => (ge("data-v-556ed7ad"), (e = e()), ke(), e),
  rn = {
    class:
      "flex flex-col items-center justify-center top-0 left-0 w-full h-full overflow-hidden absolute",
  },
  dn = an(() =>
    n(
      "div",
      { class: "w-full h-full bg-violet-5 bg-opacity-80 absolute rounded-lg" },
      null,
      -1
    )
  ),
  cn = {
    class: "loading",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    style: {
      margin: "auto",
      background: "none",
      display: "block",
      "shape-rendering": "auto",
    },
    width: "200px",
    height: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
  },
  un = ve(
    '<circle cx="50" cy="50" r="0" fill="none" stroke="#6d28d9" stroke-width="2" data-v-556ed7ad><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s" data-v-556ed7ad></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" data-v-556ed7ad></animate></circle><circle cx="50" cy="50" r="0" fill="none" stroke="#cf7dfd" stroke-width="2" data-v-556ed7ad><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s" data-v-556ed7ad></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s" data-v-556ed7ad></animate></circle>',
    2
  ),
  mn = [un],
  hn = { key: 0, class: "text-white text-2xl mt-5" };
function fn(e, t, s, p, a, o) {
  return (
    l(),
    u("div", rn, [
      dn,
      (l(), u("svg", cn, mn)),
      s.title ? (l(), u("h1", hn, f(s.title), 1)) : x("", !0),
    ])
  );
}
const Q = k(ln, [
  ["render", fn],
  ["__scopeId", "data-v-556ed7ad"],
]);
const pn = {
    name: "StakingModal",
    components: { Modal: K, Input: J, Loading: Q, Button: M },
    props: { selectedPoolAddy: { type: [Number, String] } },
    data() {
      return { isLoading: !1, amount: 0, selectedPool: null };
    },
    computed: {
      ...S(["allPools", "symbol"]),
      ...A({
        decimals: ({ main: e }) => e.paalInfo && e.paalInfo.decimals,
        userPaalBalance: ({ main: e }) =>
          (e.userPaalInfo && e.userPaalInfo.balance) || 0,
      }),
      userBalanceFixed() {
        return (
          this.userPaalBalance &&
          new w(this.userPaalBalance)
            .div(new w(10).pow(this.decimals))
            .toFixed()
        );
      },
      pools() {
        return (
          (this.allPools &&
            this.allPools.map((e) => ({
              lockup: C(new w(e.main.lockupPeriod).div(60).div(60).div(24)),
              apr: C(e.ext.fixedAPR),
              value: e.main.address,
            }))) ||
          []
        );
      },
    },
    methods: {
      ...T(["stake"]),
      async stakeTokens() {
        try {
          (this.isLoading = !0),
            await this.stake({ pool: this.selectedPool, amount: this.amount }),
            this.$notify({
              title: "Success",
              text: "Successfully Staked Tokens!",
              type: "success",
            }),
            this.$emit("close");
        } catch (e) {
          console.error("Error staking", e),
            this.$notify({
              title: "Error",
              text: `Staking failed, try again: ${e.message}`,
              type: "error",
            });
        } finally {
          this.isLoading = !1;
        }
      },
    },
    created() {
      this.selectedPool = this.selectedPoolAddy;
    },
  },
  _n = { class: "flex flex-col gap-5" },
  gn = {
    class: "flex lg:flex-row flex-col lg:items-center item-start gap-5 w-full",
  },
  kn = ["onClick"],
  vn = { class: "text-base font-bold" },
  bn = { class: "text-xl font-bold" },
  yn = n("span", { class: "ml-2 text-sm font-bold" }, "APR", -1),
  wn = { class: "text-sm font-medium text-white text-opacity-75" };
function xn(e, t, s, p, a, o) {
  const i = r("Input"),
    m = r("Button"),
    d = r("Loading"),
    v = r("Modal");
  return (
    l(),
    g(
      v,
      { title: "Select Staking Option" },
      {
        default: B(() => [
          n("div", _n, [
            n("div", gn, [
              (l(!0),
              u(
                L,
                null,
                Z(
                  o.pools,
                  (h, y) => (
                    l(),
                    u(
                      "button",
                      {
                        key: y,
                        class: I([
                          "md:p-5 p-2.5 flex flex-col items-center justify-center w-full rounded-2xl gap-1.5",
                          {
                            "bg-violet-1 text-white border border-transparent":
                              h.value == a.selectedPool,
                            "bg-violet-4 border border-gray-1 border-opacity-30 text-violet-2":
                              h.value != a.selectedPool,
                          },
                        ]),
                        onClick: (b) => (a.selectedPool = h.value),
                      },
                      [
                        n("h1", vn, f(h.lockup) + " Day Lockup", 1),
                        n("h2", null, [n("span", bn, f(h.apr) + "%", 1), yn]),
                      ],
                      10,
                      kn
                    )
                  )
                ),
                128
              )),
            ]),
            c(
              i,
              {
                placeholder: "Enter Amount",
                balance: o.userBalanceFixed,
                modelValue: a.amount,
                "onUpdate:modelValue": t[0] || (t[0] = (h) => (a.amount = h)),
              },
              null,
              8,
              ["balance", "modelValue"]
            ),
            n(
              "p",
              wn,
              " You are staking " +
                f(a.amount) +
                " " +
                f(e.symbol) +
                " tokens. ",
              1
            ),
            c(
              m,
              {
                text: "Stake",
                xs: "",
                class: "w-full",
                disabled: a.amount <= 0,
                onClick: o.stakeTokens,
              },
              null,
              8,
              ["disabled", "onClick"]
            ),
          ]),
          a.isLoading ? (l(), g(d, { key: 0 })) : x("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const me = k(pn, [["render", xn]]),
  Cn = {
    name: "Pools",
    components: { Block: ce, ProgressBar: ue, Button: M, StakingModal: me },
    props: {
      lockupSeconds: { type: [Number, String], default: 0 },
      rewardPercentageRaw: { type: [Number, String], default: 0 },
      tokenStakingAprRaw: { type: [Number, String], default: 0 },
      totalStakers: { type: [Number, String], default: 0 },
      totalStaked: { type: [Number, String], default: 0 },
      userStaked: { type: [Number, String], default: 0 },
      poolAddy: { type: [Number, String] },
    },
    data() {
      return { openStakingModal: !1 };
    },
    computed: {
      ...S(["isConnected", "symbol"]),
      ...A({
        decimals: ({ main: e }) => e.paalInfo.decimals,
        factor: ({ main: e }) => e.factor,
      }),
      lockupDays() {
        return C(new w(this.lockupSeconds).div(60).div(60).div(24));
      },
      ethRewardsPercentage() {
        return (
          (this.rewardPercentageRaw &&
            C(new w(this.rewardPercentageRaw).div(this.factor).times(100))) ||
          0
        );
      },
      tokenStakingApr() {
        return (this.tokenStakingAprRaw && C(this.tokenStakingAprRaw)) || 0;
      },
      userStakedFormatted() {
        return (
          (this.userStaked &&
            C(new w(this.userStaked).div(new w(10).pow(this.decimals)))) ||
          0
        );
      },
      userPercentageStaked() {
        return (
          (this.userStaked &&
            this.totalStaked &&
            C(new w(this.userStaked).div(this.totalStaked).times(100))) ||
          0
        );
      },
    },
    methods: { ...T(["init"]) },
  },
  $n = { class: "flex items-center justify-between" },
  Sn = { class: "text-base font-bold" },
  Mn = { class: "text-sm font-medium text-white text-opacity-75" },
  In = { class: "text-violet-2" },
  Bn = { class: "text-2xl font-bold" },
  Tn = n("span", { class: "ml-2 text-base font-bold" }, "APR", -1),
  En = { class: "flex flex-col gap-1.5" },
  Rn = { class: "flex items-center justify-between text-sm font-medium" };
function Pn(e, t, s, p, a, o) {
  const i = r("ProgressBar"),
    m = r("Button"),
    d = r("Block"),
    v = r("StakingModal");
  return (
    l(),
    u(
      L,
      null,
      [
        c(
          d,
          { class: "flex flex-col gap-3" },
          {
            default: B(() => [
              n("div", $n, [
                n("h1", Sn, f(o.lockupDays) + " Days", 1),
                n(
                  "h2",
                  Mn,
                  f(o.ethRewardsPercentage) + "% ETH Rewards Share ",
                  1
                ),
              ]),
              n("h1", In, [n("span", Bn, f(o.tokenStakingApr) + "%", 1), Tn]),
              n("div", En, [
                c(i, { percentage: `${o.userPercentageStaked}%` }, null, 8, [
                  "percentage",
                ]),
                n("div", Rn, [
                  n(
                    "h1",
                    null,
                    f(o.userStakedFormatted) +
                      " " +
                      f(e.symbol) +
                      "/" +
                      f(o.userPercentageStaked) +
                      "% ",
                    1
                  ),
                ]),
              ]),
              e.isConnected
                ? (l(),
                  g(m, {
                    key: 1,
                    text: "Stake Now",
                    class: "w-full",
                    xs: "",
                    onClick: t[0] || (t[0] = (h) => (a.openStakingModal = !0)),
                  }))
                : (l(),
                  g(
                    m,
                    {
                      key: 0,
                      text: "Connect Wallet",
                      class: "w-full mt-auto",
                      xs: "",
                      onClick: e.init,
                    },
                    null,
                    8,
                    ["onClick"]
                  )),
            ]),
            _: 1,
          }
        ),
        a.openStakingModal
          ? (l(),
            g(
              v,
              {
                key: 0,
                "selected-pool-addy": s.poolAddy,
                onClose: t[1] || (t[1] = (h) => (a.openStakingModal = !1)),
              },
              null,
              8,
              ["selected-pool-addy"]
            ))
          : x("", !0),
      ],
      64
    )
  );
}
const Nn = k(Cn, [["render", Pn]]);
var G = {
  name: "Toggle",
  emits: ["input", "update:modelValue", "change"],
  props: {
    value: {
      validator: function (e) {
        return (t) =>
          ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
      },
      required: !1,
    },
    modelValue: {
      validator: function (e) {
        return (t) =>
          ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
      },
      required: !1,
    },
    id: { type: [String, Number], required: !1, default: "toggle" },
    name: { type: [String, Number], required: !1, default: "toggle" },
    disabled: { type: Boolean, required: !1, default: !1 },
    required: { type: Boolean, required: !1, default: !1 },
    falseValue: { type: [String, Number, Boolean], required: !1, default: !1 },
    trueValue: { type: [String, Number, Boolean], required: !1, default: !0 },
    onLabel: { type: [String, Object], required: !1, default: "" },
    offLabel: { type: [String, Object], required: !1, default: "" },
    classes: { type: Object, required: !1, default: () => ({}) },
    labelledby: { type: String, required: !1 },
    describedby: { type: String, required: !1 },
    aria: { required: !1, type: Object, default: () => ({}) },
  },
  setup(e, t) {
    const s = (function (i, m, d) {
        const {
            value: v,
            modelValue: h,
            falseValue: y,
            trueValue: b,
            disabled: _,
          } = V(i),
          $ = h && h.value !== void 0 ? h : v,
          E = U(() => $.value === b.value),
          H = (P) => {
            m.emit("input", P),
              m.emit("update:modelValue", P),
              m.emit("change", P);
          },
          j = () => {
            H(b.value);
          },
          W = () => {
            H(y.value);
          };
        return (
          [null, void 0, !1, 0, "0", "off"].indexOf($.value) !== -1 &&
            [y.value, b.value].indexOf($.value) === -1 &&
            W(),
          [!0, 1, "1", "on"].indexOf($.value) !== -1 &&
            [y.value, b.value].indexOf($.value) === -1 &&
            j(),
          {
            externalValue: $,
            checked: E,
            update: H,
            check: j,
            uncheck: W,
            handleInput: (P) => {
              H(P.target.checked ? b.value : y.value);
            },
            handleClick: () => {
              _.value || (E.value ? W() : j());
            },
          }
        );
      })(e, t),
      p = (function (i, m, d) {
        const { trueValue: v, falseValue: h, onLabel: y, offLabel: b } = V(i),
          _ = d.checked,
          $ = d.update;
        return {
          label: U(() => {
            let E = _.value ? y.value : b.value;
            return E || (E = "&nbsp;"), E;
          }),
          toggle: () => {
            $(_.value ? h.value : v.value);
          },
          on: () => {
            $(v.value);
          },
          off: () => {
            $(h.value);
          },
        };
      })(e, 0, { checked: s.checked, update: s.update }),
      a = (function (i, m, d) {
        const v = V(i),
          h = v.disabled,
          y = d.checked,
          b = U(() => ({
            container: "toggle-container",
            toggle: "toggle",
            toggleOn: "toggle-on",
            toggleOff: "toggle-off",
            toggleOnDisabled: "toggle-on-disabled",
            toggleOffDisabled: "toggle-off-disabled",
            handle: "toggle-handle",
            handleOn: "toggle-handle-on",
            handleOff: "toggle-handle-off",
            handleOnDisabled: "toggle-handle-on-disabled",
            handleOffDisabled: "toggle-handle-off-disabled",
            label: "toggle-label",
            ...v.classes.value,
          }));
        return {
          classList: U(() => ({
            container: b.value.container,
            toggle: [
              b.value.toggle,
              h.value
                ? y.value
                  ? b.value.toggleOnDisabled
                  : b.value.toggleOffDisabled
                : y.value
                ? b.value.toggleOn
                : b.value.toggleOff,
            ],
            handle: [
              b.value.handle,
              h.value
                ? y.value
                  ? b.value.handleOnDisabled
                  : b.value.handleOffDisabled
                : y.value
                ? b.value.handleOn
                : b.value.handleOff,
            ],
            label: b.value.label,
          })),
        };
      })(e, 0, { checked: s.checked }),
      o = (function (i, m, d) {
        const { disabled: v } = V(i),
          h = d.check,
          y = d.uncheck,
          b = d.checked;
        return {
          handleSpace: () => {
            v.value || (b.value ? y() : h());
          },
        };
      })(e, 0, { check: s.check, uncheck: s.uncheck, checked: s.checked });
    return { ...s, ...a, ...p, ...o };
  },
};
const Ln = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"],
  An = ["id", "name", "value", "checked", "disabled"],
  Dn = ["innerHTML"],
  Hn = ["checked"];
(G.render = function (e, t, s, p, a, o) {
  return (
    l(),
    u(
      "div",
      be(
        {
          class: e.classList.container,
          tabindex: s.disabled ? void 0 : 0,
          "aria-checked": e.checked,
          "aria-describedby": s.describedby,
          "aria-labelledby": s.labelledby,
          role: "switch",
        },
        s.aria,
        {
          onKeypress:
            t[1] ||
            (t[1] = ye(
              we((...i) => e.handleSpace && e.handleSpace(...i), ["prevent"]),
              ["space"]
            )),
        }
      ),
      [
        z(
          n(
            "input",
            {
              type: "checkbox",
              id: s.id,
              name: s.name,
              value: s.trueValue,
              checked: e.checked,
              disabled: s.disabled,
            },
            null,
            8,
            An
          ),
          [[le, !1]]
        ),
        n(
          "div",
          {
            class: I(e.classList.toggle),
            onClick:
              t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
          },
          [
            n("span", { class: I(e.classList.handle) }, null, 2),
            R(
              e.$slots,
              "label",
              { checked: e.checked, classList: e.classList },
              () => [
                n(
                  "span",
                  { class: I(e.classList.label), innerHTML: e.label },
                  null,
                  10,
                  Dn
                ),
              ]
            ),
            s.required
              ? (l(),
                u(
                  "input",
                  {
                    key: 0,
                    type: "checkbox",
                    style: {
                      appearance: "none",
                      height: "1px",
                      margin: "0",
                      padding: "0",
                      fontSize: "0",
                      background: "transparent",
                      position: "absolute",
                      width: "100%",
                      bottom: "0",
                      outline: "none",
                    },
                    checked: e.checked,
                    "aria-hidden": "true",
                    tabindex: "-1",
                    required: "",
                  },
                  null,
                  8,
                  Hn
                ))
              : x("v-if", !0),
          ],
          2
        ),
      ],
      16,
      Ln
    )
  );
}),
  (G.__file = "src/Toggle.vue");
const Vn = {},
  Un = {
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  On = n(
    "path",
    {
      opacity: "0.75",
      d: "M11.1667 17H13.1667V11H11.1667V17ZM12.1667 9C12.45 9 12.6877 8.904 12.8797 8.712C13.0717 8.52 13.1673 8.28267 13.1667 8C13.1667 7.71667 13.0707 7.479 12.8787 7.287C12.6867 7.095 12.4493 6.99933 12.1667 7C11.8833 7 11.6457 7.096 11.4537 7.288C11.2617 7.48 11.166 7.71733 11.1667 8C11.1667 8.28333 11.2627 8.521 11.4547 8.713C11.6467 8.905 11.884 9.00067 12.1667 9ZM12.1667 22C10.7833 22 9.48334 21.7373 8.26667 21.212C7.05001 20.6867 5.99167 19.9743 5.09167 19.075C4.19167 18.175 3.47934 17.1167 2.95467 15.9C2.43001 14.6833 2.16734 13.3833 2.16667 12C2.16667 10.6167 2.42934 9.31667 2.95467 8.1C3.48001 6.88333 4.19234 5.825 5.09167 4.925C5.99167 4.025 7.05001 3.31267 8.26667 2.788C9.48334 2.26333 10.7833 2.00067 12.1667 2C13.55 2 14.85 2.26267 16.0667 2.788C17.2833 3.31333 18.3417 4.02567 19.2417 4.925C20.1417 5.825 20.8543 6.88333 21.3797 8.1C21.905 9.31667 22.1673 10.6167 22.1667 12C22.1667 13.3833 21.904 14.6833 21.3787 15.9C20.8533 17.1167 20.141 18.175 19.2417 19.075C18.3417 19.975 17.2833 20.6877 16.0667 21.213C14.85 21.7383 13.55 22.0007 12.1667 22Z",
      fill: "white",
    },
    null,
    -1
  ),
  Fn = [On];
function qn(e, t) {
  return l(), u("svg", Un, Fn);
}
const jn = k(Vn, [["render", qn]]),
  Wn = {
    name: "CompoundModal",
    components: { Modal: K, Input: J, Button: M, Info: D },
    data() {
      return {
        amount: null,
        selectedPool: "14",
        pools: [
          { lockup: "14", apr: "35", value: "14" },
          { lockup: "28", apr: "80", value: "28" },
          { lockup: "58", apr: "105", value: "58" },
        ],
      };
    },
    computed: { ...S(["symbol"]) },
  },
  Zn = { class: "flex flex-col gap-5" },
  zn = { class: "text-sm font-medium text-white text-opacity-75" };
function Gn(e, t, s, p, a, o) {
  const i = r("Info"),
    m = r("Input"),
    d = r("Button"),
    v = r("Modal");
  return (
    l(),
    g(
      v,
      { title: "Auto Compound" },
      {
        default: B(() => [
          n("div", Zn, [
            c(
              i,
              {
                icon: "/img/gift.png",
                value: `14,044 ${e.symbol}`,
                title: "Total Rewards",
              },
              null,
              8,
              ["value"]
            ),
            c(
              m,
              {
                "show-balance": !1,
                placeholder: "Enter Amount",
                modelValue: a.amount,
                "onUpdate:modelValue": t[0] || (t[0] = (h) => (a.amount = h)),
              },
              null,
              8,
              ["modelValue"]
            ),
            n("p", zn, " Minimum of 10,000 " + f(e.symbol), 1),
            c(d, { text: "Enable Auto Compound", xs: "", class: "w-full" }),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const Yn = k(Wn, [["render", Gn]]),
  Kn = {
    name: "CompoundInfoModal",
    components: { Modal: K, Input: J, Button: M, Info: D, Loading: Q },
    data() {
      return {
        isLoading: !1,
        selectedPool: "14",
        pools: [
          { lockup: "14", apr: "35", value: "14" },
          { lockup: "28", apr: "80", value: "28" },
          { lockup: "58", apr: "105", value: "58" },
        ],
      };
    },
    computed: { ...S(["symbol"]) },
    methods: { disableCompound() {} },
  },
  Jn = { class: "flex flex-col gap-5" },
  Qn = {
    class:
      "flex md:flex-row flex-col md:items-center md:justify-between items-start gap-5",
  };
function Xn(e, t, s, p, a, o) {
  const i = r("Info"),
    m = r("Button"),
    d = r("Loading"),
    v = r("Modal");
  return (
    l(),
    g(
      v,
      { title: "Auto Compound Information" },
      {
        default: B(() => [
          n("div", Jn, [
            n("div", Qn, [
              c(
                i,
                { value: `14,044 ${e.symbol}`, title: "Total Invested" },
                null,
                8,
                ["value"]
              ),
              c(
                i,
                { value: `$2,024 ${e.symbol}`, title: "Total Gained" },
                null,
                8,
                ["value"]
              ),
              c(i, { time: 1693473241, title: "Next Auto Compound" }),
            ]),
            c(
              m,
              {
                text: "Disable Auto Compound",
                xs: "",
                class: "w-full",
                onClick: o.disableCompound,
              },
              null,
              8,
              ["onClick"]
            ),
          ]),
          a.isLoading ? (l(), g(d, { key: 0 })) : x("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const es = k(Kn, [["render", Xn]]);
const ts = {
    name: "CompoundBlock",
    components: {
      Toggle: G,
      IconInfo: jn,
      CompoundModal: Yn,
      CompoundInfoModal: es,
    },
    data() {
      return {
        openCompoundModal: !1,
        openCompoundInfoModal: !1,
        toggleAutoCompound: !1,
      };
    },
    methods: {
      onToggle(e) {
        e ? (this.openCompoundModal = !0) : (this.openCompoundInfoModal = !0);
      },
    },
  },
  ns = { class: "flex flex-col items-start gap-1.5" },
  ss = n(
    "h1",
    { class: "text-base font-medium text-white text-opacity-75" },
    " Auto Compound ",
    -1
  ),
  os = { class: "flex items-center gap-3" };
function ls(e, t, s, p, a, o) {
  const i = r("Toggle"),
    m = r("IconInfo"),
    d = r("CompoundModal"),
    v = r("CompoundInfoModal");
  return (
    l(),
    u(
      L,
      null,
      [
        n("div", ns, [
          ss,
          n("div", os, [
            c(
              i,
              {
                class: "paal-toggle",
                modelValue: a.toggleAutoCompound,
                "onUpdate:modelValue":
                  t[0] || (t[0] = (h) => (a.toggleAutoCompound = h)),
                onChange: o.onToggle,
              },
              null,
              8,
              ["modelValue", "onChange"]
            ),
            n(
              "button",
              {
                onClick: t[1] || (t[1] = (h) => (a.openCompoundInfoModal = !0)),
              },
              [c(m)]
            ),
          ]),
        ]),
        a.openCompoundModal
          ? (l(),
            g(d, {
              key: 0,
              onClose: t[2] || (t[2] = (h) => (a.openCompoundModal = !1)),
            }))
          : x("", !0),
        a.openCompoundInfoModal
          ? (l(),
            g(v, {
              key: 1,
              onClose: t[3] || (t[3] = (h) => (a.openCompoundInfoModal = !1)),
            }))
          : x("", !0),
      ],
      64
    )
  );
}
const as = k(ts, [["render", ls]]),
  is = {},
  rs = {
    width: "16",
    height: "29",
    viewBox: "0 0 16 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  ds = n(
    "path",
    {
      d: "M5.74539 25.4064C5.74539 24.6634 6.04231 23.9509 6.57082 23.4256C7.09933 22.9002 7.81615 22.6051 8.56357 22.6051C9.311 22.6051 10.0278 22.9002 10.5563 23.4256C11.0848 23.9509 11.3818 24.6634 11.3818 25.4064C11.3818 26.1493 11.0848 26.8618 10.5563 27.3872C10.0278 27.9125 9.311 28.2076 8.56357 28.2076C7.81615 28.2076 7.09933 27.9125 6.57082 27.3872C6.04231 26.8618 5.74539 26.1493 5.74539 25.4064ZM5.74539 14.2012C5.74539 13.4583 6.04231 12.7458 6.57082 12.2204C7.09933 11.6951 7.81615 11.4 8.56357 11.4C9.311 11.4 10.0278 11.6951 10.5563 12.2204C11.0848 12.7458 11.3818 13.4583 11.3818 14.2012C11.3818 14.9442 11.0848 15.6567 10.5563 16.182C10.0278 16.7074 9.311 17.0025 8.56357 17.0025C7.81615 17.0025 7.09933 16.7074 6.57082 16.182C6.04231 15.6567 5.74539 14.9442 5.74539 14.2012ZM5.74539 2.99611C5.74539 2.25316 6.04231 1.54064 6.57082 1.0153C7.09933 0.489958 7.81615 0.194824 8.56357 0.194824C9.311 0.194824 10.0278 0.489958 10.5563 1.0153C11.0848 1.54064 11.3818 2.25316 11.3818 2.99611C11.3818 3.73905 11.0848 4.45157 10.5563 4.97691C10.0278 5.50225 9.311 5.79739 8.56357 5.79739C7.81615 5.79739 7.09933 5.50225 6.57082 4.97691C6.04231 4.45157 5.74539 3.73905 5.74539 2.99611Z",
      fill: "white",
    },
    null,
    -1
  ),
  cs = [ds];
function us(e, t) {
  return l(), u("svg", rs, cs);
}
const ms = k(is, [["render", us]]),
  hs = {
    name: "Rewards",
    components: {
      Info: D,
      ProgressBar: ue,
      Button: M,
      CompoundBlock: as,
      Loading: Q,
      IconDot: ms,
    },
    directives: { clickOutside: xe.directive },
    props: {
      mainPool: { type: String, required: !0 },
      isEvenRow: { type: Boolean, default: !1 },
      lockupSeconds: { type: [Number, String], default: 0 },
      rewardPercentageRaw: { type: [Number, String], default: 0 },
      tokenStakingAprRaw: { type: [Number, String], default: 0 },
      totalStakers: { type: [Number, String], default: 0 },
      totalStaked: { type: [Number, String], default: 0 },
      userStaked: { type: [Number, String], default: 0 },
      userStakedTimeUnix: { type: [Number, String], default: 0 },
      userUnclaimed: { type: [Number, String], default: 0 },
      userTokenEarned: { type: [Number, String], default: 0 },
    },
    data() {
      return { isLoading: !1, showAction: !1, paalEarned: 0, ethEarned: 0 };
    },
    computed: {
      ...S(["symbol"]),
      ...A({
        decimals: ({ main: e }) => e.paalInfo.decimals,
        factor: ({ main: e }) => e.factor,
      }),
      isUnlocked() {
        return this.userStakedTimeUnix
          ? N.unix(this.userStakedTimeUnix)
              .add(this.lockupSeconds, "seconds")
              .isBefore(N())
          : !1;
      },
      lockupDays() {
        return C(new w(this.lockupSeconds).div(60).div(60).div(24));
      },
      lockupDeadlineMilliseconds() {
        if (!this.userStakedTimeUnix) return 0;
        const e = N.unix(this.userStakedTimeUnix).add(
          this.lockupSeconds,
          "seconds"
        );
        return e.isBefore(N()) ? 0 : e.diff(N(), "milliseconds");
      },
      ethRewardsPercentage() {
        return (
          (this.rewardPercentageRaw &&
            C(new w(this.rewardPercentageRaw).div(this.factor).times(100))) ||
          0
        );
      },
      tokenStakingApr() {
        return (this.tokenStakingAprRaw && C(this.tokenStakingAprRaw)) || 0;
      },
      userStakedFormatted() {
        return (
          (this.userStaked &&
            C(new w(this.userStaked).div(new w(10).pow(this.decimals)))) ||
          0
        );
      },
      userHasUnclaimed() {
        return this.userUnclaimed && new w(this.userUnclaimed).gt(0);
      },
      userHasUnclaimedTokens() {
        return this.userTokenEarned && new w(this.userTokenEarned).gt(0);
      },
      userUnclaimedFormatted() {
        return (
          (this.userUnclaimed &&
            C(new w(this.userUnclaimed).div(new w(10).pow(18)))) ||
          0
        );
      },
      userTokenEarnedFormatted() {
        return (
          (this.userTokenEarned &&
            C(new w(this.userTokenEarned).div(new w(10).pow(this.decimals)))) ||
          0
        );
      },
      userPercentageStaked() {
        return (
          (this.userStaked &&
            this.totalStaked &&
            C(new w(this.userStaked).div(this.totalStaked).times(100))) ||
          0
        );
      },
    },
    methods: {
      ...T(["claimETHRewards", "claimTokenAPRRewards", "unstake"]),
      async claimNativeRewards(e = !1) {
        try {
          (this.isLoading = !0),
            (this.showAction = !1),
            (this.ethEarned = this.userUnclaimed),
            await this.claimETHRewards({
              pool: this.mainPool,
              compound: e,
              unclaimed: this.userUnclaimed,
            }),
            this.$router.push(`/generate-rewards/1/${this.ethEarned}`);
        } catch (t) {
          console.error("Error claiming", t);
        } finally {
          this.isLoading = !1;
        }
      },
      async claimTokenRewards() {
        try {
          (this.isLoading = !0),
            (this.showAction = !1),
            (this.paalEarned = this.userTokenEarned),
            await this.claimTokenAPRRewards(this.mainPool),
            this.$router.push(`/generate-rewards/3/${this.paalEarned}`);
        } catch (e) {
          console.error("Error claiming tokens", e);
        } finally {
          this.isLoading = !1;
        }
      },
      unstakeFromPool() {
        (this.showAction = !1),
          this.$swal
            .fire({
              title: "Are you sure?",
              text: `Any unclaimed ETH rewards will be forfeited. Also you'll have to restake again to start earning any more rewards on your ${this.symbol}!`,
              icon: "warning",
              showCancelButton: !0,
              iconColor: "#CF7DFD",
              confirmButtonColor: "#6D28D9",
              cancelButtonColor: "#2F0750",
              confirmButtonText: "Yes, unstake!",
            })
            .then(async (e) => {
              try {
                e.isConfirmed &&
                  ((this.isLoading = !0),
                  await this.unstake({
                    pool: this.mainPool,
                    amount: this.userStaked,
                  }));
              } catch (t) {
                console.error("Error unstaking", t);
              } finally {
                this.isLoading = !1;
              }
            });
      },
      onClickOutside() {
        this.showAction = !1;
      },
    },
  },
  fs = { class: "lg:block hidden relative" },
  ps = {
    class:
      "z-10 bg-violet-6 rounded-xl shadow w-64 absolute right-0 px-3 py-5 border border-gray-1 border-opacity-30",
  },
  _s = { class: "flex flex-col gap-3 items-start" },
  gs = {
    class:
      "flex lg:hidden lg:flex-row flex-col lg:items-center item-start gap-3",
  };
function ks(e, t, s, p, a, o) {
  const i = r("Info"),
    m = r("IconDot"),
    d = r("Button"),
    v = r("Loading"),
    h = Ce("click-outside");
  return (
    l(),
    u(
      "div",
      {
        class: I([
          "flex lg:flex-row flex-col lg:items-center lg:justify-between item-start lg:gap-0 gap-5 lg:p-5 p-3 rounded md:border-0 border border-gray-1 border-opacity-30 relative",
          { "bg-violet-4": s.isEvenRow },
        ]),
      },
      [
        c(
          i,
          {
            value: `${o.tokenStakingApr}% APR`,
            title: `${o.lockupDays} Day Lockup`,
          },
          null,
          8,
          ["value", "title"]
        ),
        c(
          i,
          {
            icon: "/img/logo.svg",
            value: `${o.userStakedFormatted} ${e.symbol}`,
            title: "Staked",
            col: "",
          },
          null,
          8,
          ["value"]
        ),
        c(
          i,
          {
            icon: "/img/gift.png",
            value: `${o.userUnclaimedFormatted} ETH`,
            title: "Unclaimed ETH",
            col: "",
          },
          null,
          8,
          ["value"]
        ),
        c(
          i,
          {
            icon: "/img/logo.svg",
            value: `${o.userTokenEarnedFormatted} ${e.symbol}`,
            title: `Earned ${e.symbol}`,
            col: "",
          },
          null,
          8,
          ["value", "title"]
        ),
        o.isUnlocked
          ? (l(), g(i, { key: 0, value: "Unlocked!", title: "Lock Remaining" }))
          : (l(),
            g(
              i,
              {
                key: 1,
                "time-unix": o.lockupDeadlineMilliseconds,
                title: "Lock Remaining",
              },
              null,
              8,
              ["time-unix"]
            )),
        z(
          (l(),
          u("div", fs, [
            n(
              "button",
              {
                onClick: t[0] || (t[0] = (y) => (a.showAction = !a.showAction)),
                class: "outline-none",
              },
              [c(m)]
            ),
            z(
              n(
                "div",
                ps,
                [
                  n("div", _s, [
                    c(
                      d,
                      {
                        text: "Compound ETH & Relock",
                        disabled: !o.userHasUnclaimed,
                        onClick:
                          t[1] || (t[1] = (y) => o.claimNativeRewards(!0)),
                        class: "w-full",
                        xl: "",
                      },
                      null,
                      8,
                      ["disabled"]
                    ),
                    c(
                      d,
                      {
                        text: "Claim ETH & Relock",
                        disabled: !o.userHasUnclaimed,
                        onClick:
                          t[2] || (t[2] = (y) => o.claimNativeRewards(!1)),
                        class: "w-full",
                        secondary: "",
                        xl: "",
                      },
                      null,
                      8,
                      ["disabled"]
                    ),
                    c(
                      d,
                      {
                        text: `Claim ${e.symbol} Rewards`,
                        disabled: !o.userHasUnclaimedTokens,
                        onClick: t[3] || (t[3] = (y) => o.claimTokenRewards()),
                        class: "w-full",
                        secondary: "",
                      },
                      null,
                      8,
                      ["text", "disabled"]
                    ),
                    c(
                      d,
                      {
                        text: "Unstake",
                        primary: !1,
                        onClick: o.unstakeFromPool,
                        disabled: !o.isUnlocked,
                        class: "w-full",
                        secondary: "",
                      },
                      null,
                      8,
                      ["onClick", "disabled"]
                    ),
                  ]),
                ],
                512
              ),
              [[le, a.showAction]]
            ),
          ])),
          [[h, o.onClickOutside]]
        ),
        n("div", gs, [
          c(
            d,
            {
              text: "Compound ETH & Relock",
              disabled: !o.userHasUnclaimed,
              onClick: t[4] || (t[4] = (y) => o.claimNativeRewards(!0)),
              xl: "",
            },
            null,
            8,
            ["disabled"]
          ),
          c(
            d,
            {
              text: "Claim ETH & Relock",
              disabled: !o.userHasUnclaimed,
              onClick: t[5] || (t[5] = (y) => o.claimNativeRewards(!1)),
              secondary: "",
              xl: "",
            },
            null,
            8,
            ["disabled"]
          ),
          c(
            d,
            {
              text: `Claim ${e.symbol} Rewards`,
              disabled: !o.userHasUnclaimedTokens,
              onClick: t[6] || (t[6] = (y) => o.claimTokenRewards()),
              class: "w-full",
              secondary: "",
            },
            null,
            8,
            ["text", "disabled"]
          ),
          c(
            d,
            {
              text: "Unstake",
              primary: !1,
              onClick: o.unstakeFromPool,
              disabled: !o.isUnlocked,
              secondary: "",
            },
            null,
            8,
            ["onClick", "disabled"]
          ),
        ]),
        a.isLoading ? (l(), g(v, { key: 2 })) : x("", !0),
      ],
      2
    )
  );
}
const vs = k(hs, [["render", ks]]),
  bs = {
    computed: {
      ...A({ networks: ({ main: e }) => e.networks }),
      validNetworksString() {
        return (
          (this.networks && this.networks.map((e) => e.name).join(", ")) ||
          "ETH"
        );
      },
    },
  },
  ys = {
    class:
      "bg-violet-3 border border-gray-1 border-opacity-30 text-sm font-medium text-violet-2 w-full p-5 rounded-full",
  };
function ws(e, t, s, p, a, o) {
  return (
    l(),
    u(
      "div",
      ys,
      " Invalid Network: Please connect your wallet to " +
        f(o.validNetworksString),
      1
    )
  );
}
const xs = k(bs, [["render", ws]]),
  Cs = "/img/empty.png",
  $s = {
    name: "Empty",
    components: { Button: M, StakingModal: me },
    computed: { ...S(["isConnected", "symbol"]) },
    data() {
      return { openModal: !1 };
    },
    methods: { ...T(["init"]) },
  },
  Ss = {
    class:
      "flex flex-col items-center justify-center w-full h-full py-10 gap-3",
  },
  Ms = n("img", { src: Cs, alt: "", class: "md:h-24 h-16 w-auto" }, null, -1),
  Is = { class: "text-center text-xl font-medium" };
function Bs(e, t, s, p, a, o) {
  const i = r("Button"),
    m = r("StakingModal");
  return (
    l(),
    u("div", Ss, [
      Ms,
      n(
        "h1",
        Is,
        f(
          e.isConnected
            ? `You have no staked ${e.symbol}`
            : "Connect your wallet"
        ),
        1
      ),
      e.isConnected
        ? (l(),
          g(i, {
            key: 0,
            text: "Stake Now!",
            onClick: t[0] || (t[0] = (d) => (a.openModal = !0)),
          }))
        : (l(),
          g(i, { key: 1, text: "Connect Wallet", onClick: e.init }, null, 8, [
            "onClick",
          ])),
      a.openModal
        ? (l(),
          g(m, { key: 2, onClose: t[1] || (t[1] = (d) => (a.openModal = !1)) }))
        : x("", !0),
    ])
  );
}
const Ts = k($s, [["render", Bs]]),
  Es = {
    name: "Staking",
    components: {
      Header: vt,
      Row: St,
      Pools: Nn,
      RewardBlock: vs,
      Block: ce,
      EthRewards: ae,
      ReferralRewards: ie,
      InvalidNetwork: xs,
      Empty: Ts,
      Button: M,
    },
    computed: {
      ...S(["allPools", "isConnected", "isOnValidNetwork", "symbol"]),
      activeUserStakes() {
        return (
          this.allPools &&
          this.allPools.reduce(
            (e, t) =>
              t.main &&
              t.main.userInfo &&
              new w(t.main.userInfo.userShares[0] || 0).gt(0)
                ? e.concat([t])
                : e,
            []
          )
        );
      },
      hasStakes() {
        return this.activeUserStakes && this.activeUserStakes.length > 0;
      },
    },
  },
  Rs = { class: "flex flex-col w-full h-full bg-violet md:ml-[220px] ml-0" },
  Ps = { class: "flex flex-col w-full h-full bg-main lg:p-8 p-4 gap-10" },
  Ns = { class: "grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 w-full" };
function Ls(e, t, s, p, a, o) {
  const i = r("Header"),
    m = r("InvalidNetwork"),
    d = r("Pools"),
    v = r("Row"),
    h = r("RewardBlock"),
    y = r("Empty"),
    b = r("Block");
  return (
    l(),
    u("div", Rs, [
      n("div", Ps, [
        c(i),
        e.isConnected && !e.isOnValidNetwork
          ? (l(), g(m, { key: 0 }))
          : x("", !0),
        c(
          v,
          {
            title: "Pool Size",
            "sub-title": `Leverage the power of compounding by staking your ${e.symbol} tokens and compounding rewards as they accrue.`,
          },
          {
            default: B(() => [
              n("div", Ns, [
                (l(!0),
                u(
                  L,
                  null,
                  Z(
                    e.allPools,
                    (_, $) => (
                      l(),
                      g(
                        d,
                        {
                          key: $,
                          "lockup-seconds": _.main.lockupPeriod,
                          "reward-percentage-raw": _.main.ethRewardPercentage,
                          "token-staking-apr-raw": _.ext.fixedAPR,
                          "total-stakers": _.main.totalStakedUsers,
                          "total-staked": _.main.totalSharesDeposited,
                          "user-staked":
                            _.main.userInfo && _.main.userInfo.userShares[0],
                          "pool-addy": _.main.address,
                        },
                        null,
                        8,
                        [
                          "lockup-seconds",
                          "reward-percentage-raw",
                          "token-staking-apr-raw",
                          "total-stakers",
                          "total-staked",
                          "user-staked",
                          "pool-addy",
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            _: 1,
          },
          8,
          ["sub-title"]
        ),
        c(
          v,
          { title: "My Stakes & Rewards" },
          {
            default: B(() => [
              c(
                b,
                { primary: !1, class: "flex flex-col gap-5" },
                {
                  default: B(() => [
                    o.hasStakes
                      ? (l(!0),
                        u(
                          L,
                          { key: 0 },
                          Z(
                            o.activeUserStakes,
                            (_, $) => (
                              l(),
                              g(
                                h,
                                {
                                  key: $,
                                  "main-pool": _.main.address,
                                  "is-even-row": $ % 2 == 0,
                                  "lockup-seconds": _.main.lockupPeriod,
                                  "reward-percentage-raw":
                                    _.main.ethRewardPercentage,
                                  "token-staking-apr-raw": _.ext.fixedAPR,
                                  "total-stakers": _.main.totalStakedUsers,
                                  "total-staked": _.main.totalSharesDeposited,
                                  "user-staked":
                                    _.main.userInfo &&
                                    _.main.userInfo.userShares[0],
                                  "user-staked-time-unix":
                                    _.main.userInfo &&
                                    _.main.userInfo.userShares[1],
                                  "user-unclaimed":
                                    _.main.userInfo &&
                                    _.main.userInfo.userUnpaid,
                                  "user-token-earned":
                                    _.ext.userInfo && _.ext.userInfo.rewardOf,
                                },
                                null,
                                8,
                                [
                                  "main-pool",
                                  "is-even-row",
                                  "lockup-seconds",
                                  "reward-percentage-raw",
                                  "token-staking-apr-raw",
                                  "total-stakers",
                                  "total-staked",
                                  "user-staked",
                                  "user-staked-time-unix",
                                  "user-unclaimed",
                                  "user-token-earned",
                                ]
                              )
                            )
                          ),
                          128
                        ))
                      : (l(), g(y, { key: 1 })),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        ),
      ]),
    ])
  );
}
const As = k(Es, [["render", Ls]]),
  Ds = { name: "Dapp", components: { Sidebar: ht, Staking: As } },
  Hs = {
    class:
      "flex md:flex-row flex-col items-start w-full lg:h-screen h-full relative",
  };
function Vs(e, t, s, p, a, o) {
  const i = r("Sidebar"),
    m = r("Staking");
  return l(), u("div", Hs, [c(i), c(m)]);
}
const Fs = k(Ds, [["render", Vs]]);
export { Fs as default };
