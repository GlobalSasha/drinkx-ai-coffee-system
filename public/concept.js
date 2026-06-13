const drinks = [
  {
    name: "Капучино",
    image: "cappuccino-salted-almond.png",
    category: ["classic", "coffee"],
    type: "Классический кофе",
    description: "Эспрессо, горячее молоко и плотная воздушная пена в сбалансированной классической пропорции.",
    tags: ["эспрессо", "молоко", "пена"],
    tint: "rgba(218, 181, 145, 0.42)",
    price: 280,
    milk: true,
    syrups: true,
    nutrition: [128, 6.2, 6.8, 10.4]
  },
  {
    name: "Латте",
    image: "latte-d2d.png",
    category: ["classic", "coffee"],
    type: "Классический кофе",
    description: "Мягкий молочный кофе с тонким слоем пены и спокойным вкусом эспрессо.",
    tags: ["эспрессо", "молоко", "мягкий"],
    tint: "rgba(225, 194, 157, 0.4)",
    price: 300,
    milk: true,
    syrups: true,
    nutrition: [168, 7.1, 7.8, 17.2]
  },
  {
    name: "Раф",
    image: "raf-crunch.png",
    category: ["classic", "coffee"],
    type: "Классический раф",
    description: "Эспрессо, сливочная молочная основа и мягкая сладость, взбитые в единую бархатную текстуру.",
    tags: ["эспрессо", "сливки", "текстура"],
    tint: "rgba(231, 191, 137, 0.42)",
    price: 340,
    milk: true,
    syrups: true,
    nutrition: [238, 5.4, 13.1, 24.6]
  },
  {
    name: "Американо",
    image: "grog.png",
    category: ["classic", "coffee"],
    type: "Чёрный кофе",
    description: "Чистый эспрессо, раскрытый горячей водой. Можно настроить крепость и уровень сладости.",
    tags: ["эспрессо", "вода", "чистый вкус"],
    tint: "rgba(128, 78, 49, 0.44)",
    price: 240,
    milk: false,
    strength: true,
    nutrition: [12, 0.4, 0.1, 1.8]
  },
  {
    name: "Лунго",
    image: "grog.png",
    category: ["classic", "coffee"],
    type: "Длинный эспрессо",
    description: "Увеличенная экстракция эспрессо с более выраженным кофейным профилем и долгим послевкусием.",
    tags: ["эспрессо", "экстракция", "насыщенный"],
    tint: "rgba(111, 67, 42, 0.46)",
    price: 250,
    milk: false,
    strength: true,
    nutrition: [14, 0.5, 0.1, 2.1]
  },
  {
    name: "Сезон Сакуры",
    image: "sakura-season.png",
    category: ["cold", "signature"],
    type: "Авторский лимонад",
    description: "Юдзу, лемонграсс и вишня в лёгком цветочном профиле. Свежий, прозрачный и немного игристый.",
    tags: ["юдзу", "вишня", "лемонграсс"],
    tint: "rgba(255, 139, 170, 0.38)",
    price: 390,
    milk: false,
    nutrition: [126, 0.4, 0.2, 30]
  },
  {
    name: "Вьетнамский бамбл",
    image: "vietnamese-bumble.png",
    category: ["coffee", "cold", "signature"],
    type: "Холодный кофе",
    description: "Плотный кофе встречается с яркой фруктовой основой. Контрастный вкус с долгим цитрусовым послевкусием.",
    tags: ["кофе", "цитрус", "тропики"],
    tint: "rgba(255, 165, 54, 0.42)",
    price: 420,
    milk: false,
    nutrition: [168, 1.8, 2.1, 34]
  },
  {
    name: "Айс матча",
    image: "ice-matcha.png",
    category: ["cold", "tea"],
    type: "Матча напиток",
    description: "Прохладная матча с воздушной молочной текстурой. Мягкая растительная горчинка и чистый сливочный финиш.",
    tags: ["матча", "молоко", "лёд"],
    tint: "rgba(154, 216, 119, 0.38)",
    price: 370,
    milk: true,
    nutrition: [184, 5.1, 6.2, 27]
  },
  {
    name: "Фудзи раф",
    image: "fuji-raf.png",
    category: ["coffee", "signature"],
    type: "Авторский раф",
    description: "Сливочный кофейный профиль с деликатной сладостью и мягкой ароматической нотой.",
    tags: ["эспрессо", "сливки", "ваниль"],
    tint: "rgba(229, 196, 161, 0.4)",
    price: 410,
    milk: true,
    nutrition: [248, 5.4, 13.2, 27]
  },
  {
    name: "Ханами",
    image: "hanami.png",
    category: ["tea", "signature"],
    type: "Авторский чай",
    description: "Светлый чайный микс с цветочным ароматом, фруктовой кислотностью и спокойным свежим финалом.",
    tags: ["чай", "цветы", "фрукты"],
    tint: "rgba(234, 150, 195, 0.36)",
    price: 360,
    milk: false,
    nutrition: [112, 0.3, 0.1, 27]
  },
  {
    name: "Латте Баунти",
    image: "latte-bounty.png",
    category: ["coffee", "signature"],
    type: "Десертный латте",
    description: "Кофе, кокос и шоколад в плотной молочной текстуре. Напиток-десерт с узнаваемым ароматом.",
    tags: ["кокос", "шоколад", "кофе"],
    tint: "rgba(180, 121, 82, 0.42)",
    price: 430,
    milk: true,
    nutrition: [286, 6.3, 14.8, 32]
  },
  {
    name: "Колдбрю вишня",
    image: "coldbrew-cherry.png",
    category: ["coffee", "cold"],
    type: "Фруктовый колдбрю",
    description: "Долгая холодная экстракция кофе и насыщенная вишня. Яркий вкус без тяжёлой сладости.",
    tags: ["колдбрю", "вишня", "лёд"],
    tint: "rgba(190, 59, 72, 0.4)",
    price: 380,
    milk: false,
    nutrition: [104, 0.8, 0.2, 24]
  },
  {
    name: "Жасмин кокос",
    image: "jasmine-coconut.png",
    category: ["tea", "signature"],
    type: "Авторский чай",
    description: "Аромат жасмина и мягкий кокосовый профиль в лёгком прохладном напитке.",
    tags: ["жасмин", "кокос", "чай"],
    tint: "rgba(151, 219, 188, 0.35)",
    price: 370,
    milk: false,
    nutrition: [138, 0.6, 2.8, 27]
  },
  {
    name: "Баннофи",
    image: "banoffee.png",
    category: ["coffee", "signature"],
    type: "Десертный кофе",
    description: "Банан, карамель и кофе складываются в насыщенный десертный напиток с бархатной текстурой.",
    tags: ["банан", "карамель", "кофе"],
    tint: "rgba(222, 166, 88, 0.42)",
    price: 440,
    milk: true,
    nutrition: [302, 6.7, 15.1, 36]
  },
  {
    name: "Кариб",
    image: "carib.png",
    category: ["cold", "signature"],
    type: "Тропический лимонад",
    description: "Сочный тропический профиль с цитрусовой свежестью и прохладным игристым характером.",
    tags: ["тропики", "цитрус", "содовая"],
    tint: "rgba(255, 188, 79, 0.4)",
    price: 350,
    milk: false,
    nutrition: [118, 0.2, 0.1, 29]
  },
  {
    name: "Матча Латте Дабл",
    image: "matcha-latte-double-3d.png",
    category: ["tea", "signature"],
    type: "Интенсивная матча",
    description: "Двойная порция матча для более яркого вкуса, соединённая с мягкой молочной основой.",
    tags: ["матча", "умами", "молоко"],
    tint: "rgba(116, 180, 91, 0.4)",
    price: 410,
    milk: true,
    nutrition: [202, 6.2, 7.1, 28]
  },
  {
    name: "Раф клубника-банан",
    image: "raf-strawberry-banana.png",
    category: ["coffee", "signature"],
    type: "Фруктовый раф",
    description: "Сливочный раф с клубничной свежестью и округлой банановой сладостью.",
    tags: ["клубника", "банан", "сливки"],
    tint: "rgba(255, 111, 137, 0.38)",
    price: 450,
    milk: true,
    nutrition: [314, 6.4, 16.2, 37]
  }
];

const elements = {
  app: document.querySelector("#app"),
  startButton: document.querySelector("#startButton"),
  brandButton: document.querySelector("#brandButton"),
  bubbleField: document.querySelector("#bubbleField"),
  categoryFilter: document.querySelector("#categoryFilter"),
  drinkCount: document.querySelector("#drinkCount"),
  voiceButton: document.querySelector("#voiceButton"),
  upsellBackButton: document.querySelector("#upsellBackButton"),
  upsellContext: document.querySelector("#upsellContext"),
  upsellMessage: document.querySelector("#upsellMessage"),
  upsellCurrentImage: document.querySelector("#upsellCurrentImage"),
  upsellCurrentName: document.querySelector("#upsellCurrentName"),
  upsellCurrentPrice: document.querySelector("#upsellCurrentPrice"),
  upsellRecommendedImage: document.querySelector("#upsellRecommendedImage"),
  upsellRecommendedName: document.querySelector("#upsellRecommendedName"),
  upsellRecommendedPrice: document.querySelector("#upsellRecommendedPrice"),
  upsellTags: document.querySelector("#upsellTags"),
  acceptUpsellButton: document.querySelector("#acceptUpsellButton"),
  declineUpsellButton: document.querySelector("#declineUpsellButton"),
  detailBackButton: document.querySelector("#detailBackButton"),
  detailImage: document.querySelector("#detailImage"),
  detailIndex: document.querySelector("#detailIndex"),
  detailType: document.querySelector("#detailType"),
  detailTitle: document.querySelector("#detailTitle"),
  detailDescription: document.querySelector("#detailDescription"),
  detailPrice: document.querySelector("#detailPrice"),
  flavourTags: document.querySelector("#flavourTags"),
  nutritionKcal: document.querySelector("#nutritionKcal"),
  nutritionProtein: document.querySelector("#nutritionProtein"),
  nutritionFat: document.querySelector("#nutritionFat"),
  nutritionCarbs: document.querySelector("#nutritionCarbs"),
  sizeOptions: document.querySelector("#sizeOptions"),
  volumeOutput: document.querySelector("#volumeOutput"),
  milkGroup: document.querySelector("#milkGroup"),
  milkOptions: document.querySelector("#milkOptions"),
  milkOutput: document.querySelector("#milkOutput"),
  syrupGroup: document.querySelector("#syrupGroup"),
  syrupOptions: document.querySelector("#syrupOptions"),
  syrupOutput: document.querySelector("#syrupOutput"),
  strengthGroup: document.querySelector("#strengthGroup"),
  strengthOptions: document.querySelector("#strengthOptions"),
  strengthOutput: document.querySelector("#strengthOutput"),
  sweetnessGroup: document.querySelector("#sweetnessGroup"),
  sweetnessRange: document.querySelector("#sweetnessRange"),
  sweetnessOutput: document.querySelector("#sweetnessOutput"),
  orderButton: document.querySelector("#orderButton"),
  orderPrice: document.querySelector("#orderPrice"),
  prepImage: document.querySelector("#prepImage"),
  readyImage: document.querySelector("#readyImage"),
  ingredientOrbit: document.querySelector("#ingredientOrbit"),
  progressOrbit: document.querySelector("#progressOrbit"),
  timerValue: document.querySelector("#timerValue"),
  stageNumber: document.querySelector("#stageNumber"),
  stageTitle: document.querySelector("#stageTitle"),
  stageDescription: document.querySelector("#stageDescription"),
  stageList: document.querySelector("#stageList"),
  factText: document.querySelector("#factText"),
  finishDemoButton: document.querySelector("#finishDemoButton"),
  readyDescription: document.querySelector("#readyDescription"),
  readyOrder: document.querySelector("#readyOrder"),
  newOrderButton: document.querySelector("#newOrderButton"),
  toast: document.querySelector("#toast")
};

const state = {
  screen: "intro",
  category: "all",
  selectedDrink: drinks[0],
  size: "M",
  milk: "Обычное",
  syrup: "Без сиропа",
  strength: "Средняя",
  sweetness: 1,
  bubbles: [],
  animationFrame: null,
  preparationTimer: null,
  secondsLeft: 45,
  lastTimestamp: 0,
  isSelectingDrink: false,
  pendingDrink: null,
  recommendedDrink: null,
  upsellSeen: new Set()
};

const sizeConfig = {
  S: { volume: 250, price: -40, nutrition: 0.76 },
  M: { volume: 350, price: 0, nutrition: 1 },
  L: { volume: 500, price: 70, nutrition: 1.36 }
};

const milkPrices = {
  "Обычное": 0,
  "Овсяное": 60,
  "Миндальное": 70,
  "Кокосовое": 70
};

const syrupPrice = 45;
const strengthPrices = {
  "Мягкая": 0,
  "Средняя": 0,
  "Крепкая": 50
};

const sweetnessLabels = ["Без сахара", "Средняя", "Сладкая", "Очень сладкая"];
const upsellPriceThreshold = 300;
const prepDuration = 45;
const prepStages = [
  {
    threshold: 0,
    title: "Подготовка основы",
    description: "Система калибрует рецепт под выбранный объём.",
    fact: "Каждый параметр рецепта проверяется в реальном времени."
  },
  {
    threshold: 0.26,
    title: "Соединение вкусов",
    description: "Вкусовые слои добавляются в точной последовательности.",
    fact: "Последовательность ингредиентов влияет на баланс и аромат напитка."
  },
  {
    threshold: 0.56,
    title: "Создание текстуры",
    description: "DrinkX формирует плотность и температуру напитка.",
    fact: "Текстура адаптируется под размер порции и выбранное молоко."
  },
  {
    threshold: 0.82,
    title: "Финальный баланс",
    description: "Система завершает рецепт и проверяет результат.",
    fact: "Последние секунды нужны для стабилизации вкуса перед выдачей."
  }
];

function setScreen(screen) {
  state.screen = screen;
  elements.app.dataset.screen = screen;

  if (screen !== "menu") stopBubbleAnimation();
  if (screen === "menu") requestAnimationFrame(() => startBubbleAnimation());
}

function formatPrice(value) {
  return `${value} ₽`;
}

function currentPrice() {
  const milkExtra = state.selectedDrink.milk ? milkPrices[state.milk] || 0 : 0;
  const syrupExtra = state.selectedDrink.syrups && state.syrup !== "Без сиропа" ? syrupPrice : 0;
  const strengthExtra = state.selectedDrink.strength ? strengthPrices[state.strength] || 0 : 0;
  return state.selectedDrink.price + sizeConfig[state.size].price + milkExtra + syrupExtra + strengthExtra;
}

function renderDrinkDetails() {
  const drink = state.selectedDrink;
  const index = drinks.indexOf(drink) + 1;
  const factor = sizeConfig[state.size].nutrition;
  const nutrition = drink.nutrition.map((value) => Math.round(value * factor * 10) / 10);

  elements.detailImage.src = `./assets/drinks/${drink.image}`;
  elements.detailImage.alt = drink.name;
  elements.detailIndex.textContent = String(index).padStart(2, "0");
  elements.detailType.textContent = drink.type;
  elements.detailTitle.textContent = drink.name;
  elements.detailDescription.textContent = drink.description;
  elements.detailPrice.textContent = formatPrice(currentPrice());
  elements.orderPrice.textContent = formatPrice(currentPrice());
  elements.flavourTags.innerHTML = drink.tags.map((tag) => `<span>${tag}</span>`).join("");
  elements.nutritionKcal.textContent = nutrition[0];
  elements.nutritionProtein.textContent = nutrition[1];
  elements.nutritionFat.textContent = nutrition[2];
  elements.nutritionCarbs.textContent = nutrition[3];
  elements.volumeOutput.textContent = `${sizeConfig[state.size].volume} мл`;
  elements.milkOutput.textContent = state.milk;
  elements.syrupOutput.textContent = state.syrup;
  elements.strengthOutput.textContent = state.strength;
  elements.milkGroup.hidden = !drink.milk;
  elements.syrupGroup.hidden = !drink.syrups;
  elements.strengthGroup.hidden = !drink.strength;

  elements.sizeOptions.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.size === state.size);
  });
  elements.milkOptions.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.milk === state.milk);
  });
  elements.syrupOptions.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.syrup === state.syrup);
  });
  elements.strengthOptions.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.strength === state.strength);
  });
}

function openDrinkDetails(drink) {
  state.selectedDrink = drink;
  state.size = "M";
  state.milk = "Обычное";
  state.syrup = "Без сиропа";
  state.strength = "Средняя";
  state.sweetness = 1;
  elements.sweetnessRange.value = "1";
  updateSweetness();
  renderDrinkDetails();
  setScreen("detail");
}

function findDrink(name) {
  return drinks.find((drink) => drink.name === name);
}

function recommendationContext() {
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth();
  const externalContext = window.DRINKX_CONTEXT || {};
  const temperature = Number(externalContext.temperature);

  if (Number.isFinite(temperature)) {
    if (temperature >= 22) {
      return {
        label: `На улице ${Math.round(temperature)}° · хочется прохлады`,
        recommendation: "Вьетнамский бамбл",
        reason: "Сейчас тепло, и гости чаще выбирают яркий холодный кофе с цитрусовым послевкусием."
      };
    }

    if (temperature <= 8) {
      return {
        label: `На улице ${Math.round(temperature)}° · согревающий выбор`,
        recommendation: "Фудзи раф",
        reason: "Сейчас прохладно, поэтому особенно хорошо подходит тёплый сливочный кофе с мягкой текстурой."
      };
    }
  }

  if (hour >= 5 && hour < 12) {
    return {
      label: "Утро · мягкий заряд энергии",
      recommendation: "Фудзи раф",
      reason: "Утром его часто выбирают за более насыщенный вкус, мягкую текстуру и спокойный заряд энергии."
    };
  }

  if (hour >= 12 && hour < 17) {
    const warmSeason = month >= 3 && month <= 8;
    return warmSeason
      ? {
          label: "День · сезон холодного кофе",
          recommendation: "Вьетнамский бамбл",
          reason: "Днём в тёплый сезон гости чаще выбирают яркий холодный кофе с освежающим цитрусовым профилем."
        }
      : {
          label: "День · популярный десертный кофе",
          recommendation: "Латте Баунти",
          reason: "Днём его часто берут как кофе и небольшой десерт одновременно: насыщенно, но без отдельного перекуса."
        };
  }

  if (hour >= 17 && hour < 22) {
    return {
      label: "Вечер · более спокойный ритм",
      recommendation: "Ханами",
      reason: "Вечером гости чаще переходят на лёгкий авторский чай с фруктовой кислотностью и цветочным ароматом."
    };
  }

  return {
    label: "Поздний час · мягкий выбор",
    recommendation: "Ханами",
    reason: "Сейчас лучше подойдёт лёгкий авторский чай: яркий вкус без тяжёлого кофейного профиля."
  };
}

function shouldShowUpsell(drink) {
  return drink.price <= upsellPriceThreshold && !state.upsellSeen.has(drink.name);
}

function showUpsell(drink) {
  const context = recommendationContext();
  const recommended = findDrink(context.recommendation);

  if (!recommended || recommended.price <= drink.price) {
    openDrinkDetails(drink);
    return;
  }

  state.pendingDrink = drink;
  state.recommendedDrink = recommended;
  state.upsellSeen.add(drink.name);

  elements.upsellContext.textContent = context.label;
  elements.upsellMessage.textContent =
    `Я вижу, ты выбрал ${drink.name}. ${context.reason} Может, сегодня попробуем ${recommended.name}?`;
  elements.upsellCurrentImage.src = `./assets/drinks/${drink.image}`;
  elements.upsellCurrentImage.alt = drink.name;
  elements.upsellCurrentName.textContent = drink.name;
  elements.upsellCurrentPrice.textContent = formatPrice(drink.price);
  elements.upsellRecommendedImage.src = `./assets/drinks/${recommended.image}`;
  elements.upsellRecommendedImage.alt = recommended.name;
  elements.upsellRecommendedName.textContent = recommended.name;
  elements.upsellRecommendedPrice.textContent =
    `${formatPrice(recommended.price)} · +${recommended.price - drink.price} ₽`;
  elements.upsellTags.innerHTML = recommended.tags
    .slice(0, 3)
    .map((tag) => `<span>${tag}</span>`)
    .join("");
  setScreen("upsell");
}

function selectDrink(drink, element) {
  if (state.isSelectingDrink) return;

  state.isSelectingDrink = true;
  stopBubbleAnimation();
  elements.bubbleField.classList.add("is-selecting");
  element.classList.add("is-selected");

  window.setTimeout(() => {
    if (shouldShowUpsell(drink)) showUpsell(drink);
    else openDrinkDetails(drink);
    elements.bubbleField.classList.remove("is-selecting");
    element.classList.remove("is-selected");
    state.isSelectingDrink = false;
  }, 660);
}

function filteredDrinks() {
  if (state.category === "all") return drinks;
  return drinks.filter((drink) => drink.category.includes(state.category));
}

function bubbleSize(index, count) {
  const width = elements.bubbleField.clientWidth || 900;
  const height = elements.bubbleField.clientHeight || 500;
  const base = Math.min(width, height);
  const compact = width < 600;
  const vertical = height > width * 1.2;
  const scale = compact ? 0.195 : vertical ? 0.265 : 0.24;
  const variation = [0.84, 1.04, 0.92, 1.14, 0.88, 1.08][index % 6];
  const crowdFactor = count > 9 ? 0.88 : 1;
  return Math.max(
    compact ? 92 : 112,
    Math.min(compact ? 142 : vertical ? 194 : 178, base * scale * variation * crowdFactor)
  );
}

function createBubbles() {
  stopBubbleAnimation();
  elements.bubbleField.querySelectorAll(".drink-bubble").forEach((bubble) => bubble.remove());
  state.bubbles = [];

  const list = filteredDrinks();
  const fieldWidth = Math.max(320, elements.bubbleField.clientWidth);
  const fieldHeight = Math.max(360, elements.bubbleField.clientHeight);
  const useVerticalGrid = fieldHeight > fieldWidth * 1.2;

  list.forEach((drink, index) => {
    const size = bubbleSize(index, list.length);
    const radius = size / 2;
    const element = document.createElement("button");
    element.className = "drink-bubble";
    element.type = "button";
    element.style.setProperty("--size", `${size}px`);
    element.style.setProperty("--tint", drink.tint);
    element.setAttribute("aria-label", `${drink.name}. Открыть напиток`);
    element.innerHTML = `
      <img src="./assets/drinks/${drink.image}" alt="" />
      <span class="drink-bubble-label">${drink.name}</span>
    `;
    element.addEventListener("click", () => selectDrink(drink, element));
    elements.bubbleField.appendChild(element);

    let x;
    let y;

    if (useVerticalGrid) {
      const columns = 3;
      const rows = Math.ceil(list.length / columns);
      const column = index % columns;
      const row = Math.floor(index / columns);
      const cellWidth = fieldWidth / columns;
      const cellHeight = fieldHeight / rows;
      x = (column + 0.5) * cellWidth + Math.sin(index * 1.7) * cellWidth * 0.08;
      y = (row + 0.5) * cellHeight + Math.cos(index * 1.3) * cellHeight * 0.08;
    } else {
      const angle = (Math.PI * 2 * index) / list.length + 0.42;
      const spreadX = Math.max(radius, fieldWidth * 0.34);
      const spreadY = Math.max(radius, fieldHeight * 0.31);
      x = fieldWidth / 2 + Math.cos(angle) * spreadX * (0.55 + (index % 3) * 0.13);
      y = fieldHeight / 2 + Math.sin(angle) * spreadY * (0.55 + ((index + 1) % 3) * 0.12);
    }

    state.bubbles.push({
      element,
      x: Math.min(fieldWidth - radius, Math.max(radius, x)),
      y: Math.min(fieldHeight - radius, Math.max(radius, y)),
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.5) * 18,
      radius,
      phase: Math.random() * Math.PI * 2
    });
  });

  elements.drinkCount.textContent = `${list.length} ${list.length === 1 ? "напиток" : "напитков"} в движении`;
  startBubbleAnimation();
}

function resolveCollisions() {
  for (let i = 0; i < state.bubbles.length; i += 1) {
    for (let j = i + 1; j < state.bubbles.length; j += 1) {
      const first = state.bubbles[i];
      const second = state.bubbles[j];
      const dx = second.x - first.x;
      const dy = second.y - first.y;
      const minDistance = first.radius + second.radius + 5;
      const distanceSquared = dx * dx + dy * dy;

      if (distanceSquared === 0 || distanceSquared >= minDistance * minDistance) continue;

      const distance = Math.sqrt(distanceSquared);
      const nx = dx / distance;
      const ny = dy / distance;
      const overlap = minDistance - distance;
      first.x -= nx * overlap * 0.5;
      first.y -= ny * overlap * 0.5;
      second.x += nx * overlap * 0.5;
      second.y += ny * overlap * 0.5;

      const relativeVelocity = (second.vx - first.vx) * nx + (second.vy - first.vy) * ny;
      if (relativeVelocity >= 0) continue;

      const impulse = -relativeVelocity * 0.88;
      first.vx -= impulse * nx;
      first.vy -= impulse * ny;
      second.vx += impulse * nx;
      second.vy += impulse * ny;
    }
  }
}

function animateBubbles(timestamp) {
  if (state.screen !== "menu") return;

  const delta = state.lastTimestamp ? Math.min(0.032, (timestamp - state.lastTimestamp) / 1000) : 0.016;
  state.lastTimestamp = timestamp;
  const width = elements.bubbleField.clientWidth;
  const height = elements.bubbleField.clientHeight;

  state.bubbles.forEach((bubble, index) => {
    bubble.phase += delta * (0.42 + (index % 4) * 0.05);
    bubble.vx += Math.cos(bubble.phase) * delta * 1.8;
    bubble.vy += Math.sin(bubble.phase * 0.9) * delta * 1.8;
    const speed = Math.hypot(bubble.vx, bubble.vy);
    const maxSpeed = 19;
    if (speed > maxSpeed) {
      bubble.vx = (bubble.vx / speed) * maxSpeed;
      bubble.vy = (bubble.vy / speed) * maxSpeed;
    }

    bubble.x += bubble.vx * delta;
    bubble.y += bubble.vy * delta;

    if (bubble.x - bubble.radius < 0) {
      bubble.x = bubble.radius;
      bubble.vx = Math.abs(bubble.vx) * 0.92;
    } else if (bubble.x + bubble.radius > width) {
      bubble.x = width - bubble.radius;
      bubble.vx = -Math.abs(bubble.vx) * 0.92;
    }

    if (bubble.y - bubble.radius < 0) {
      bubble.y = bubble.radius;
      bubble.vy = Math.abs(bubble.vy) * 0.92;
    } else if (bubble.y + bubble.radius > height) {
      bubble.y = height - bubble.radius;
      bubble.vy = -Math.abs(bubble.vy) * 0.92;
    }
  });

  resolveCollisions();

  state.bubbles.forEach((bubble) => {
    bubble.element.style.transform = `translate3d(${bubble.x - bubble.radius}px, ${bubble.y - bubble.radius}px, 0)`;
  });

  state.animationFrame = requestAnimationFrame(animateBubbles);
}

function startBubbleAnimation() {
  if (state.animationFrame || state.screen !== "menu") return;
  state.lastTimestamp = 0;
  state.animationFrame = requestAnimationFrame(animateBubbles);
}

function stopBubbleAnimation() {
  if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
  state.animationFrame = null;
  state.lastTimestamp = 0;
}

function updateSweetness() {
  const value = Number(elements.sweetnessRange.value);
  state.sweetness = value;
  elements.sweetnessOutput.textContent = sweetnessLabels[value];
  const progress = (value / 3) * 100;
  elements.sweetnessRange.style.background =
    `linear-gradient(90deg, var(--orange) ${progress}%, rgba(255, 255, 255, 0.13) ${progress}%)`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
}

function renderIngredients() {
  const drink = state.selectedDrink;
  const ingredientNames = drink.tags.slice(0, 3);
  if (drink.milk) ingredientNames.push(state.milk);
  if (drink.syrups && state.syrup !== "Без сиропа") ingredientNames.push(state.syrup);
  if (drink.strength) ingredientNames.push(state.strength);
  ingredientNames.push(state.size);
  const colors = ["#ff9a56", "#9fe3cc", "#a99cff", "#f1dac2", "#ffcb70"];

  elements.ingredientOrbit.innerHTML = ingredientNames
    .map((name, index) => {
      const angle = (Math.PI * 2 * index) / ingredientNames.length - Math.PI / 2;
      const radius = index % 2 ? 41 : 46;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      const size = 54 + (index % 3) * 9;
      return `
        <span
          class="ingredient"
          style="
            left:${x}%;
            top:${y}%;
            --ingredient-size:${size}px;
            --ingredient-color:${colors[index % colors.length]}55;
            animation-delay:${index * -0.45}s;
          "
        >${name}</span>
      `;
    })
    .join("");
}

function formatTime(seconds) {
  return `00:${String(Math.max(0, seconds)).padStart(2, "0")}`;
}

function updatePreparation() {
  const progress = (prepDuration - state.secondsLeft) / prepDuration;
  const stageIndex = [...prepStages].reverse().findIndex((stage) => progress >= stage.threshold);
  const actualIndex = prepStages.length - 1 - stageIndex;
  const stage = prepStages[Math.max(0, actualIndex)];

  elements.timerValue.textContent = formatTime(state.secondsLeft);
  elements.progressOrbit.style.setProperty("--progress", `${Math.round(progress * 100)}%`);
  elements.stageNumber.textContent = String(actualIndex + 1).padStart(2, "0");
  elements.stageTitle.textContent = stage.title;
  elements.stageDescription.textContent = stage.description;
  elements.factText.textContent = stage.fact;

  [...elements.stageList.children].forEach((item, index) => {
    item.classList.toggle("is-active", index === actualIndex);
    item.classList.toggle("is-done", index < actualIndex);
  });
}

function startPreparation() {
  clearInterval(state.preparationTimer);
  state.secondsLeft = prepDuration;
  elements.prepImage.src = `./assets/drinks/${state.selectedDrink.image}`;
  elements.prepImage.alt = state.selectedDrink.name;
  elements.readyImage.src = `./assets/drinks/${state.selectedDrink.image}`;
  elements.readyImage.alt = state.selectedDrink.name;
  renderIngredients();
  updatePreparation();
  setScreen("preparing");

  state.preparationTimer = setInterval(() => {
    state.secondsLeft -= 1;
    updatePreparation();
    if (state.secondsLeft <= 0) finishPreparation();
  }, 1000);
}

function finishPreparation() {
  clearInterval(state.preparationTimer);
  state.preparationTimer = null;
  const milk = state.selectedDrink.milk ? ` · ${state.milk.toLowerCase()} молоко` : "";
  const syrup = state.selectedDrink.syrups && state.syrup !== "Без сиропа"
    ? ` · ${state.syrup.toLowerCase()} сироп`
    : "";
  const strength = state.selectedDrink.strength ? ` · ${state.strength.toLowerCase()} крепость` : "";
  elements.readyDescription.textContent = `${state.selectedDrink.name} ждёт тебя в зоне выдачи DrinkX.`;
  elements.readyOrder.textContent =
    `${state.size} · ${sizeConfig[state.size].volume} мл${milk}${syrup}${strength} · ${sweetnessLabels[state.sweetness].toLowerCase()}`;
  setScreen("ready");
}

function resetOrder() {
  clearInterval(state.preparationTimer);
  state.preparationTimer = null;
  state.category = "all";
  state.size = "M";
  state.milk = "Обычное";
  state.syrup = "Без сиропа";
  state.strength = "Средняя";
  state.sweetness = 1;
  state.isSelectingDrink = false;
  state.pendingDrink = null;
  state.recommendedDrink = null;
  state.upsellSeen.clear();
  elements.bubbleField.classList.remove("is-selecting");
  elements.categoryFilter.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === "all");
  });
  setScreen("menu");
  requestAnimationFrame(createBubbles);
}

elements.startButton.addEventListener("click", () => {
  setScreen("menu");
  requestAnimationFrame(createBubbles);
});

elements.brandButton.addEventListener("click", () => {
  clearInterval(state.preparationTimer);
  setScreen("intro");
});

elements.detailBackButton.addEventListener("click", () => {
  setScreen("menu");
  requestAnimationFrame(createBubbles);
});

elements.categoryFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  elements.categoryFilter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  createBubbles();
});

elements.voiceButton.addEventListener("click", () => {
  showToast("Голосовой выбор подключим к существующему AI-бариста на следующем этапе");
});

elements.upsellBackButton.addEventListener("click", () => {
  state.pendingDrink = null;
  state.recommendedDrink = null;
  setScreen("menu");
  requestAnimationFrame(createBubbles);
});

elements.declineUpsellButton.addEventListener("click", () => {
  if (!state.pendingDrink) return;
  const drink = state.pendingDrink;
  state.pendingDrink = null;
  state.recommendedDrink = null;
  openDrinkDetails(drink);
});

elements.acceptUpsellButton.addEventListener("click", () => {
  if (!state.recommendedDrink) return;
  const drink = state.recommendedDrink;
  state.pendingDrink = null;
  state.recommendedDrink = null;
  openDrinkDetails(drink);
});

elements.sizeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-size]");
  if (!button) return;
  state.size = button.dataset.size;
  renderDrinkDetails();
});

elements.milkOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-milk]");
  if (!button) return;
  state.milk = button.dataset.milk;
  elements.milkOutput.textContent = state.milk;
  renderDrinkDetails();
});

elements.syrupOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-syrup]");
  if (!button) return;
  state.syrup = button.dataset.syrup;
  elements.syrupOutput.textContent = state.syrup;
  renderDrinkDetails();
});

elements.strengthOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-strength]");
  if (!button) return;
  state.strength = button.dataset.strength;
  elements.strengthOutput.textContent = state.strength;
  renderDrinkDetails();
});

elements.sweetnessRange.addEventListener("input", updateSweetness);
elements.orderButton.addEventListener("click", startPreparation);
elements.finishDemoButton.addEventListener("click", finishPreparation);
elements.newOrderButton.addEventListener("click", resetOrder);

window.addEventListener("resize", () => {
  if (state.screen !== "menu") return;
  clearTimeout(window.drinkXResizeTimer);
  window.drinkXResizeTimer = setTimeout(createBubbles, 180);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopBubbleAnimation();
  else if (state.screen === "menu") startBubbleAnimation();
});

updateSweetness();
