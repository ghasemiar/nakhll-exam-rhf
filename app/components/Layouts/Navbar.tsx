"use client";
import React, { useRef } from "react";

import CreateTaskForm from "@/app/components/Task/CreateTask";
import AppModal from "@/app/components/AppModal";

export default function Navbar() {
  const closeDialogAfterDone = useRef();
  return (
    <div className="tw-m-3">
      <div className="tw-navbar tw-p-3 tw-rounded-2xl tw-bg-base-300">
        <div className="tw-navbar-start">
          <span className="tw-btn tw-btn-ghost tw-text-xl">لیست وضایف</span>
        </div>
        <div className="tw-navbar-end tw-grid-cols-2 tw-gap-3">
          <AppModal
            ref={closeDialogAfterDone}
            label="ایجاد وظیفه"
            styles="tw-btn tw-btn-primary"
          >
            <h3 className="tw-text-xl">اضافه کردن یک وظیفه جدید</h3>
            <CreateTaskForm
              afterDone={() => {
                closeDialogAfterDone.current.handleCloseModal();
              }}
            />
          </AppModal>
        </div>
      </div>
    </div>
  );
}
