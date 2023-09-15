<template>
  <div class="border-base rounded-md bg-base p-4 shadow-sm dark:border">
    <h2 class="text-sm font-medium text-$c-gray-600">
      Profile Completion
    </h2>

    <div class="relative mt-1">
      <span class="absolute right-0 text-xs font-medium -top-4 text-warning">
        50%
      </span>

      <div class="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          class="h-2 w-50% rounded-full bg-warning"
        />
      </div>
    </div>

    <div class="mt-3 flex flex-col items-center space-y-3">
      <NAccordion
        :items="[
          {
            label: 'Hide Recommendations',
          },
        ]"
        btn="~"
        size="14px"
        :una="{
          accordionButton: 'p-0 font-light text-$c-gray-600',
        }"
        reverse
        unstyle
        default-open
      >
        <template #0>
          <div class="px-5 pb-4 text-12px font-light leading-5 text-$c-gray-500">
            <p>
              Fill-up the following items to strengthen your profile. This can help us matching your profile and increase your chances of landing into your desired role.
            </p>

            <ul class="ml-4 mt-3 list-circle space-y-1">
              <li>Share <span class="text-primary">Date of Birth</span></li>
              <li>Specify <span class="text-primary">Current Monthly Salary</span></li>
              <li>Add <span class="text-primary">Current Address</span></li>
              <li>Add atleast five(5) items in <span class="text-primary">Other Skills</span></li>
            </ul>
          </div>
        </template>
      </NAccordion>
    </div>
  </div>
</template>
