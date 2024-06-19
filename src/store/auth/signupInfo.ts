import { MakeCapsuleStep, MakeCapsuleStepType } from 'src/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  currentStep: MakeCapsuleStepType;
  isMakeModalOpen: boolean;
}
interface Action {
  setCurrentStep: (currentStep: MakeCapsuleStepType) => void;
  setIsMakeModalOpen: (isMakeModalOpen: boolean) => void;
}

const useSignupStore = devtools<State & Action>((set) => ({
  // state
  isMakeModalOpen: false,
  currentStep: MakeCapsuleStep.SelectColor,
  // actions
  setCurrentStep: (currentStep) => set(() => ({ currentStep })),
  setIsMakeModalOpen: (isMakeModalOpen) => set(() => ({ isMakeModalOpen })),
}));

export default create(useSignupStore);
