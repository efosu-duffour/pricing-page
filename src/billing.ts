type Billing = {
  [s: string]: number;
  annually: number;
  monthly: number;
};
type Plan = "basic" | "standard" | "premium";
type Period = "annually" | "monthly";

const BASIC = 0;
const STANDARD = 1;
const PREMIUM = 2;


const billingPlans: Record<number, Billing> = {
  0: { annually: 109.99, monthly: 9.99 },
  1: { annually: 219.99, monthly: 19.99 },
  2: { annually: 299.99, monthly: 29.99 },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBillingStrategy);
} else {
  initBillingStrategy();
}

function initBillingStrategy() {
  const billingForm = document.querySelector("form") as HTMLFormElement;
  const plansDisplay = document.querySelectorAll(
    "[data-plan]"
  ) as NodeListOf<HTMLElement>;

  billingForm.addEventListener("input", (e: Event) => {
    plansDisplay.forEach((elem) =>
      updatePlansDisplay(
        elem.dataset['plan'] as Plan,
        (e.target as HTMLInputElement).value as Period,
        elem
      )
    );
  });

  function updatePlansDisplay(plan: Plan, period: Period, elem: HTMLElement) {
    const priceDisplay = elem.querySelector("[price]") as HTMLSpanElement;
    const periodDisplay = elem.querySelector("[period]") as HTMLSpanElement;
    const extrasDisplay = elem.querySelector("[extras]") as HTMLSpanElement;

    switch (plan) {
      case "basic": {
        const billingPlan = billingPlans[BASIC];
        priceDisplay.textContent = `$${billingPlan[period]}`;
        periodDisplay.textContent = `/${period}`;
        extrasDisplay.textContent = `Billed ${period}`;
        break;
      }
      case "standard": {
        const billingPlan = billingPlans[STANDARD];
        priceDisplay.textContent = `$${billingPlan[period]}`;
        periodDisplay.textContent = `/${period}`;
        break;
      }
      case "premium": {
        const billingPlan = billingPlans[PREMIUM];
        priceDisplay.textContent = `$${billingPlan[period]}`;
        periodDisplay.textContent = `/${period}`;
        extrasDisplay.textContent = `Billed ${period}`;
        break;
      }
    }
  }
}
