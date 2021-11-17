import create from 'zustand';

const useStore = create(set => ({
    page: "available",
    setPage: (newPage) => set({ page: newPage }),

    currentStory: {},
    setCurrentStory: (currStory) => set({ currentStory: currStory }),

    availableStories: [],
    setAvailableStories: (stories) => set({ availableStories: stories }),

    completedStories: [],
    setCompletedStories: (stories) => set({ completedStories: stories }),
}));

export default useStore;