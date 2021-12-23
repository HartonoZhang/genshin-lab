const Character_Detail = {
  traveler_anemo: {
    id: 'A0001',
    routeName: 'traveler_anemo',
    name: "Traveler (Anemo)",
    imgSrc: "/assets/character/traveler-anemo.png",
    visionImgSrc: "/assets/vision/anemo.png",
    vision: "Anemo",
    rarity: '/assets/icon/5star.png',
    rating: "C",
    weapon: "Sword",
    constellation: {
      title: 'Traveler (Anemo) Constellations',
      list: [
        {
          id: 'c1',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 1',
          description: 'Palm Vortex pulls in enemies within a 5m radius.'
        },
        {
          id: 'c2',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 2',
          description: 'Increases Energy Recharge by 16%.'
        },
        {
          id: 'c3',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 3',
          description: 'Increases the Level of Gust Surge by 3.\nMaximum upgrade level is 15.'
        },
        {
          id: 'c4',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 4',
          description: 'Reduces DMG taken while casting Palm Vortex by 10%.'
        },
        {
          id: 'c5',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 5',
          description: 'Increase the Level of Palm Vortex by 3.\nMaximum upgrade level is 15.'
        },
        {
          id: 'c6',
          name: 'Raging Vortex',
          sub_description: 'Constellation Level 6',
          description: 'Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.'
        },
      ]
    },
    build: {
        title_build: "Best Traveler (Anemo) Builds",
        role_build: "Anemo Sub DPS Build",
        description: "This build empowers the Traveler's Anemo and Swirl damage, while simultaneously reducing enemies' Elemental RES for the rest of your party.",
        weapon_build: [
          {
            id: "WP0002",
            name: "Skyward Blade",
            description: "CRIT Rate increased by 4~8%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and increases the DMG of Normal and Charged Attack hits by 20~40% for 12s.",
            imgSrc: '/assets/weapon/skyward_blade.png',
            sub_description: 'Energy Recharge',
            rarity: '/assets/icon/5star.png',
          },
          {
            id: "WP0015",
            name: "Iron Sting",
            description: "Dealing Elemental DMG increases all DMG by 6~12% for 6s. Max 2 stacks. Can only occur once every 1s.",
            imgSrc: '/assets/weapon/iron_sting.png',
            sub_description: 'Elemental Mastery',
            rarity: '/assets/icon/4star.png',
          },
        ],
        artifact_build: [
          {
            id: 'Viridescent Venerer',
            name: 'Viridescent Venerer',
            imgSrc: '/assets/artifact/viridescent_venerer.png',
            sub_description: 'ATK% / Anemo DMG / CRIT DMG',
            rarity: '/assets/icon/5star.png',
            pieceBonus: [
              {
                setBonus: '2-Piece',
                description: 'Anemo DMG Bonus +15%.'
              },
              {
                setBonus: '4-Piece',
                description: "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s."
              }
            ]
          }
        ],
    },
    skill_talent: {
      title: "Traveler (Anemo) Skills Talents",
      list: [
        {
          id: 'skill-1',
          name: 'Foreign Ironwind',
          sub_description: 'Normal Attack',
          description: "Normal Attack\nPerforms up to 5 consecutive strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact."
        },
        {
          id: 'skill-2',
          name: 'Palm Vortex',
          sub_description: 'Elemental Skill',
          description: "Grasping the wind's might, you form a vortex of vacuum in your palm, causing continuous Anemo DMG to enemies in front of you. The vacuum vortex explodes when the skill duration ends, causing a greater amount of Anemo DMG over a larger area.\nHold\nDMG and AoE will gradually increase\nElemental Absorption\nIf the vortex comes in contact with Hydro/Pyro/Cryo/Electro elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use."
        },
        {
          id: 'skill-3',
          name: 'Gust Surge',
          sub_description: 'Elemental Burst',
          description: "Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing continuous Anemo DMG.\nElemental Absorption\nIf the tornado comes in contact with Hydro/Pyro/Cryo/Electro elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use."
        },
      ]
  },
    passive: {
      title: 'Traveler (Anemo) Passive Talents',
      list: [
        {
          id: 'passive-1',
          name: 'Slitting Wind',
          sub_description: 'Unlocked at Ascension 1',
          description: 'The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as Anemo DMG to all opponents in its path.'
        },
        {
          id: 'passive-2',
          name: 'Second Wind',
          sub_description: 'Unlocked at Ascension 4',
          description: 'Palm Vortex kills renegerate 2% HP for 5s. This effect can only occur once every 5s.'
        },
      ]
    },
    ascension : [],
    best_team: [],
  },
  jean: {
    id: 'A0002',
    name: "Jean",
    imgSrc: "/assets/character/jean.png",
  },
  venti: {
    id: 'A0003',
    name: "Venti",
    imgSrc: "/assets/character/venti.png",
  },
  sucrose: {
    id: 'A0004',
    name: "Sucrose",
    imgSrc: "/assets/character/sucrose.png",
  },
  xiao: {
    id: 'A0005',
    name: "Xiao",
    imgSrc: "/assets/character/xiao.png",
  },
  kazuha: {
    id: 'A0006',
    name: "Kazuha",
    imgSrc: "/assets/character/kazuha.png",
  },
  sayu: {
    id: 'A0007',
    name: "Sayu",
    imgSrc: "/assets/character/sayu.png",
  },
  amber: {
    id: 'P0001',
    name: "Amber",
    imgSrc: "/assets/character/amber.png",
  },
  diluc: {
    id: 'P0002',
    name: "Diluc",
    imgSrc: "/assets/character/diluc.png",
  },
  yoimiya: {
    id: 'P0003',
    name: "Yoimiya",
    imgSrc: "/assets/character/yoimiya.png",
  },
  benneth: {
    id: 'P0004',
    name: "Benneth",
    imgSrc: "/assets/character/benneth.png",
  },
  klee: {
    id: 'P0005',
    name: "Klee",
    imgSrc: "/assets/character/klee.png",
  },
  hutao: {
    id: 'P0006',
    name: "Hutao",
    imgSrc: "/assets/character/hutao.png",
  },
  xiangling: {
    id: 'P0007',
    name: "Xiangling",
    imgSrc: "/assets/character/xiangling.png",
  },
  xinyan: {
    id: 'P0008',
    name: "Xinyan",
    imgSrc: "/assets/character/xinyan.png",
  },
  yanfei: {
    id: 'P0009',
    name: "Yanfei",
    imgSrc: "/assets/character/yanfei.png",
  },
  Thoma: {
    id: 'P0010',
    name: "Thoma",
    imgSrc: "/assets/character/thoma.png",
  },
  lisa: {
    id: 'E0001',
    name: "Lisa",
    imgSrc: "/assets/character/lisa.png",
  },
  razor: {
    id: 'E0002',
    name: "Razor",
    imgSrc: "/assets/character/razor.png",
  },
  fischl: {
    id: 'E0003',
    name: "Fischl",
    imgSrc: "/assets/character/fischl.png",
  },
  beidou: {
    id: 'E0004',
    name: "Beidou",
    imgSrc: "/assets/character/beidou.png",
  },
  keqing: {
    id: 'E0005',
    name: "Keqing",
    imgSrc: "/assets/character/keqing.png",
  },
  shogun: {
    id: 'E0006',
    name: "Shogun",
    imgSrc: "/assets/character/raiden.png",
  },
  sara: {
    id: 'E0007',
    name: "Sara",
    imgSrc: "/assets/character/sara.png",
  },
  traveler_electro: {
    id: 'E0008',
    name: "Traveler",
    imgSrc: "/assets/character/traveler-electro.png",
  },
  rosaria: {
    id: 'C0001',
    name: "Rosaria",
    imgSrc: "/assets/character/rosaria.png",
  },
  kaeya: {
    id: 'C0002',
    name: "Kaeya",
    imgSrc: "/assets/character/kaeya.png",
  },
  eula: {
    id: 'C0003',
    name: "Eula",
    imgSrc: "/assets/character/eula.png",
  },
  diona: {
    id: 'C0004',
    name: "Diona",
    imgSrc: "/assets/character/diona.png",
  },
  aloy: {
    id: 'C0005',
    name: "Aloy",
    imgSrc: "/assets/character/aloy.png",
  },
  chongyun: {
    id: 'C0006',
    name: "Chongyun",
    imgSrc: "/assets/character/chongyun.png",
  },
  ayaka: {
    id: 'C0007',
    name: "Ayaka",
    imgSrc: "/assets/character/ayaka.png",
  },
  ganyu: {
    id: 'C0008',
    name: "Ganyu",
    imgSrc: "/assets/character/ganyu.png",
  },
  qiqi: {
    id: 'C0009',
    name: "Qiqi",
    imgSrc: "/assets/character/qiqi.png",
  },
  noelle: {
    id: 'G0001',
    name: "Noelle",
    imgSrc: "/assets/character/noelle.png",
  },
  albedo: {
    id: 'G0002',
    name: "Albedo",
    imgSrc: "/assets/character/albedo.png",
  },
  ningguang: {
    id: 'G0003',
    name: "Ningguang",
    imgSrc: "/assets/character/ningguang.png",
  },
  traveler_geo: {
    id: 'G0004',
    name: "Traveler",
    imgSrc: "/assets/character/traveler-geo.png",
  },
  zhongli: {
    id: 'G0005',
    name: "Zhongli",
    imgSrc: "/assets/character/zhongli.png",
  },
  tartaglia: {
    id: 'H0001',
    name: "Tartaglia",
    imgSrc: "/assets/character/tartaglia.png",
  },
  barbara: {
    id: 'H0002',
    name: "Barbara",
    imgSrc: "/assets/character/barbara.png",
  },
  xingqiu: {
    id: 'H0003',
    name: "Xingqiu",
    imgSrc: "/assets/character/xingqiu.png",
  },
  kokomi: {
    id: 'H0004',
    name: "Kokomi",
    imgSrc: "/assets/character/kokomi.png",
  },
  mona: {
    id: 'H0005',
    name: "Mona",
    imgSrc: "/assets/character/mona.png",
  },
};

export default Character_Detail;
