const app = Vue.createApp({
  data() {
    return {
      message: "",
      theme: "light",
    };
  },
  computed: {
    htmlOutput() {
      return marked.parse(this.message);
    },
    charCount() {
      return this.htmlOutput.replace(/<[^>]*>/g, "").length;
    },
    themeIcon() {
      return this.theme === "dark" ? "light_mode" : "dark_mode";
    },
  },
  mounted() {
    // Load saved text from localStorage when the app is mounted
    const savedMessage = localStorage.getItem("markdownMessage");
    if (savedMessage) {
      this.message = savedMessage;
    }

    // Load saved theme from localStorage when the app is mounted
    const savedTheme = localStorage.getItem("markdownTheme");
    this.theme = savedTheme || "light";
    document.documentElement.setAttribute("data-bs-theme", this.theme);
  },
  watch: {
    // Save `message` to localStorage whenever it changes
    message(newMessage) {
      localStorage.setItem("markdownMessage", newMessage);
    },
    // Save `theme` to localStorage whenever it changes
    theme(newTheme) {
      localStorage.setItem("markdownTheme", newTheme);
      document.documentElement.setAttribute("data-bs-theme", newTheme);
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
    clearText() {
      this.message = "";
    },
  },
});

app.mount("#app");
