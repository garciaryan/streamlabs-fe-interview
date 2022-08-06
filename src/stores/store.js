import { defineStore } from "pinia";

export const useSources = defineStore('sources', {
  // Store our img urls and keep track of which view is active
  state: () => ({
      screenshare: '',
      feed: '',
      sharing: new Map(),
      canvasView: ''
  }),
  actions: {
    setSharing(item) {
      if (this.sharing.get(item)) {
        this.sharing.delete(item)
      } else {
        this.sharing.set(item, item);
      }

      this.initializeCanvasView();
    },
    // Set initial view for when sharing is active
    initializeCanvasView() {
      if (this.sharing.has('screenshare') && this.sharing.has('video-feed')) {
        this.canvasView = 'webcam-screenshare-25-left';
      } else if (this.sharing.has('video-feed')) {
        this.canvasView = 'webcam-full';
      } else {
        this.canvasView = 'screenshare-full';
      }
    }
  }
});
