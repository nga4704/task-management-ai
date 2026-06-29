import { useState, useEffect } from "react";
import Input from "@/shared/components/common/Input";

import { useUserProfile } from "../hooks/useUserProfile";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

function AccountSection() {
  const { data: user } = useUserProfile();

  const {
    mutate: updateProfile,
    isPending,
    isSuccess,
    isError,
  } = useUpdateProfile();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
  });

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.full_name || "",
        username: user.username || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      setToast("Profile updated successfully!");

      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setToast("Update failed!");
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  const handleSave = () => {
    updateProfile({
      fullName: form.fullName,
      username: form.username,
    });
  };

  return (
    <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft relative">

      {/* TOAST */}
      {toast && (
        <div className="absolute right-4 top-4 rounded-xl bg-black px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold">
          Account Information
        </h2>

        <p className="mt-1 text-muted">
          Manage your profile details
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

        <Input
          label="Full Name"
          value={form.fullName}
          onChange={(e) =>
            setForm((p) => ({
              ...p,
              fullName: e.target.value,
            }))
          }
        />

        <Input
          label="Username"
          value={form.username}
          onChange={(e) =>
            setForm((p) => ({
              ...p,
              username: e.target.value,
            }))
          }
        />

        <Input
          label="Email"
          value={user?.email || ""}
          disabled
        />

      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={isPending}
          className={`
            rounded-xl px-5 py-2 font-medium text-white transition
            ${isPending ? "bg-gray-400" : "bg-primary hover:opacity-90"}
          `}
        >
          {isPending ? "Saving..." : "Save changes"}
        </button>
      </div>

    </section>
  );
}

export default AccountSection;