const events = {
  events: {},

  on: function(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },

  off: function(eventName, fn) {
    try {
      for (let i = 0; i < this.events[eventName].length; ++i) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    } catch (error) {
      return;
    }
  },

  emit: function(eventName, data) {
    try {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    } catch (error) {
      return;
    }
  }
};
