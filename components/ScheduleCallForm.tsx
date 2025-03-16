"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function ScheduleCallForm({ isModal = false, onClose = () => {} }) {
  interface FormData {
    fullName: string;
    companyName: string;
    location: string;
    phoneNumber: string;
    emailAddress: string;
    services: {
      refurnishing: boolean;
      designOnly: boolean;
      designAndBuild: boolean;
      newBuild: boolean;
      projectConsultancy: boolean;
    };
    projectPurpose: string;
    otherPurpose: string;
    hasLocation: boolean | null;
    address: string;
    needsLocationHelp: boolean | null;
    preferredLocations: string;
    spaceSize: string;
    referralSource: string;
    otherReferralSource: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    location: "",
    phoneNumber: "",
    emailAddress: "",
    services: {
      refurnishing: false,
      designOnly: false,
      designAndBuild: false,
      newBuild: false,
      projectConsultancy: false,
    },
    projectPurpose: "",
    otherPurpose: "",
    hasLocation: null,
    address: "",
    needsLocationHelp: null,
    preferredLocations: "",
    spaceSize: "",
    referralSource: "",
    otherReferralSource: "",
  })

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string> & { servicesSelected?: string }>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  interface InputChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  interface CheckboxChangeEvent {
    target: {
      name: string;
      checked: boolean;
    };
  }

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  interface RadioChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleRadioChange = (e: RadioChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "true" ? true : value === "false" ? false : value,
    });
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    // Basic Information validation
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.companyName.trim()) errors.companyName = "Company Name is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone Number is required";
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      errors.emailAddress = "Email Address is invalid";
    }

    // Project Details validation
    const servicesSelected = Object.values(formData.services).some((value) => value);
    if (!servicesSelected) errors.services = "Please select at least one service";
    if (!formData.projectPurpose) errors.projectPurpose = "Please select a project purpose";
    if (formData.projectPurpose === "Others" && !formData.otherPurpose.trim()) {
      errors.otherPurpose = "Please specify the project purpose";
    }

    // Space Details validation
    if (formData.hasLocation === null) errors.hasLocation = "Please select an option";
    if (formData.hasLocation && !formData.address.trim()) errors.address = "Address is required";
    if (formData.hasLocation === false && formData.needsLocationHelp === null) {
      errors.needsLocationHelp = "Please select an option";
    }
    if (formData.needsLocationHelp && !formData.preferredLocations.trim()) {
      errors.preferredLocations = "Please specify preferred locations";
    }
    if (!formData.spaceSize) errors.spaceSize = "Please select a space size";

    // Additional Information validation
    if (!formData.referralSource) errors.referralSource = "Please select how you heard about us";
    if (formData.referralSource === "Others" && !formData.otherReferralSource.trim()) {
      errors.otherReferralSource = "Please specify how you heard about us";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      const formDataObj = {
        fullName: formData.fullName,
        companyName: formData.companyName,
        location: formData.location,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        services: Object.keys(formData.services)
          .filter((key) => formData.services[key as keyof typeof formData.services])
          .join(", "), // Convert services object to a comma-separated string
        projectPurpose: formData.projectPurpose,
        otherPurpose: formData.otherPurpose || "",
        hasLocation: formData.hasLocation ? "Yes" : "No",
        address: formData.address || "",
        needsLocationHelp: formData.needsLocationHelp ? "Yes" : "No",
        preferredLocations: formData.preferredLocations || "",
        spaceSize: formData.spaceSize,
        referralSource: formData.referralSource,
        otherReferralSource: formData.otherReferralSource || "",
      };

      try {
        const response = await fetch("https://formsubmit.co/business@outtabox.work", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        });

        if (response.ok) {
          setFormData({
            fullName: "",
            companyName: "",
            location: "",
            phoneNumber: "",
            emailAddress: "",
            services: {
              refurnishing: false,
              designOnly: false,
              designAndBuild: false,
              newBuild: false,
              projectConsultancy: false,
            },
            projectPurpose: "",
            otherPurpose: "",
            hasLocation: null,
            address: "",
            needsLocationHelp: null,
            preferredLocations: "",
            spaceSize: "",
            referralSource: "",
            otherReferralSource: "",
          });
          setIsSubmitted(true);
          if (isModal) {
            setTimeout(() => {
              onClose();
            }, 7000); 
          }
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={`${isModal ? "bg-white" : "min-h-screen bg-light-gray py-12 px-4 sm:px-6 lg:px-8"}`}>
      <div className={`${isModal ? "" : "max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"}`}>
        <div className="bg-deep-blue text-white py-6 px-8">
          <h1 className="text-2xl md:text-3xl font-bold">Schedule a Call with Outtabox</h1>
          <p className="mt-2 text-white/80">Fill out the form below and our team will get back to you shortly.</p>
        </div>

        {isSubmitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 px-8 text-center">
            <div className="mx-auto w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your request has been submitted successfully. We'll contact you soon to schedule your call.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {isModal ? (
                <button
                  onClick={onClose}
                  className="bg-tech-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
                >
                  Close
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-tech-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
                >
                  Submit Another Request
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="py-8 px-4 sm:px-8 space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-bold text-deep-blue mb-4 pb-2 border-b border-gray-200">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.fullName && <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.companyName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.companyName && <p className="mt-1 text-sm text-red-500">{formErrors.companyName}</p>}
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location (City/State) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.location ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.location && <p className="mt-1 text-sm text-red-500">{formErrors.location}</p>}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-500">{formErrors.phoneNumber}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.emailAddress ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.emailAddress && <p className="mt-1 text-sm text-red-500">{formErrors.emailAddress}</p>}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h2 className="text-xl font-bold text-deep-blue mb-4 pb-2 border-b border-gray-200">Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Which of our services are you interested in? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { id: "refurnishing", label: "Refurnishing" },
                      { id: "designOnly", label: "Design Only" },
                      { id: "designAndBuild", label: "Design & Build" },
                      { id: "newBuild", label: "New Build" },
                      { id: "projectConsultancy", label: "Project Consultancy" },
                    ].map((service) => (
                      <div key={service.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={service.id}
                          name={service.id}
                          checked={formData.services[service.id as keyof typeof formData.services]}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-tech-green focus:ring-tech-green border-gray-300 rounded"
                        />
                        <label htmlFor={service.id} className="ml-2 block text-sm text-gray-700">
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formErrors.servicesSelected && <p className="mt-1 text-sm text-red-500">{formErrors.servicesSelected}</p>}
                </div>

                <div>
                  <label htmlFor="projectPurpose" className="block text-sm font-medium text-gray-700 mb-1">
                    What is the purpose of this project? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectPurpose"
                    name="projectPurpose"
                    value={formData.projectPurpose}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.projectPurpose ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select purpose</option>
                    <option value="New Office Setup">New Office Setup</option>
                    <option value="Office Upgrade">Office Upgrade</option>
                    <option value="Expansion">Expansion</option>
                    <option value="Rebranding">Rebranding</option>
                    <option value="Others">Others</option>
                  </select>
                  {formErrors.projectPurpose && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.projectPurpose}</p>
                  )}
                </div>

                {formData.projectPurpose === "Others" && (
                  <div>
                    <label htmlFor="otherPurpose" className="block text-sm font-medium text-gray-700 mb-1">
                      Please specify the purpose <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="otherPurpose"
                      name="otherPurpose"
                      value={formData.otherPurpose}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                        formErrors.otherPurpose ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.otherPurpose && <p className="mt-1 text-sm text-red-500">{formErrors.otherPurpose}</p>}
                  </div>
                )}
              </div>
            </div>

            {/* Space Details */}
            <div>
              <h2 className="text-xl font-bold text-deep-blue mb-4 pb-2 border-b border-gray-200">Space Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you already have a location in mind? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="hasLocationYes"
                        name="hasLocation"
                        value="true"
                        checked={formData.hasLocation === true}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-tech-green focus:ring-tech-green border-gray-300"
                      />
                      <label htmlFor="hasLocationYes" className="ml-2 block text-sm text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="hasLocationNo"
                        name="hasLocation"
                        value="false"
                        checked={formData.hasLocation === false}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-tech-green focus:ring-tech-green border-gray-300"
                      />
                      <label htmlFor="hasLocationNo" className="ml-2 block text-sm text-gray-700">
                        No
                      </label>
                    </div>
                  </div>
                  {formErrors.hasLocation && <p className="mt-1 text-sm text-red-500">{formErrors.hasLocation}</p>}
                </div>

                {formData.hasLocation && (
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address/City/State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                        formErrors.address ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.address && <p className="mt-1 text-sm text-red-500">{formErrors.address}</p>}
                  </div>
                )}

                {formData.hasLocation === false && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you need help finding a space? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="needsLocationHelpYes"
                          name="needsLocationHelp"
                          value="true"
                          checked={formData.needsLocationHelp === true}
                          onChange={handleRadioChange}
                          className="h-4 w-4 text-tech-green focus:ring-tech-green border-gray-300"
                        />
                        <label htmlFor="needsLocationHelpYes" className="ml-2 block text-sm text-gray-700">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="needsLocationHelpNo"
                          name="needsLocationHelp"
                          value="false"
                          checked={formData.needsLocationHelp === false}
                          onChange={handleRadioChange}
                          className="h-4 w-4 text-tech-green focus:ring-tech-green border-gray-300"
                        />
                        <label htmlFor="needsLocationHelpNo" className="ml-2 block text-sm text-gray-700">
                          No
                        </label>
                      </div>
                    </div>
                    {formErrors.needsLocationHelp && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.needsLocationHelp}</p>
                    )}
                  </div>
                )}

                {formData.needsLocationHelp && (
                  <div>
                    <label htmlFor="preferredLocations" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Locations <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="preferredLocations"
                      name="preferredLocations"
                      value={formData.preferredLocations}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                        formErrors.preferredLocations ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.preferredLocations && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.preferredLocations}</p>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="spaceSize" className="block text-sm font-medium text-gray-700 mb-1">
                    What is the approximate size of the space? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="spaceSize"
                    name="spaceSize"
                    value={formData.spaceSize}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.spaceSize ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select size</option>
                    <option value="100-300 sqm">100-300 sqm</option>
                    <option value="300-400 sqm">300-400 sqm</option>
                    <option value="400-500 sqm">400-500 sqm</option>
                    <option value="500-600 sqm">500-600 sqm</option>
                    <option value="600 sqm and above">600 sqm and above</option>
                  </select>
                  {formErrors.spaceSize && <p className="mt-1 text-sm text-red-500">{formErrors.spaceSize}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-xl font-bold text-deep-blue mb-4 pb-2 border-b border-gray-200">
                Additional Information
              </h2>
              <div>
                <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? <span className="text-red-500">*</span>
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                    formErrors.referralSource ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select source</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Event">Event</option>
                  <option value="Others">Others</option>
                </select>
                {formErrors.referralSource && <p className="mt-1 text-sm text-red-500">{formErrors.referralSource}</p>}
              </div>

              {formData.referralSource === "Others" && (
                <div className="mt-4">
                  <label htmlFor="otherReferralSource" className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify how you heard about us <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="otherReferralSource"
                    name="otherReferralSource"
                    value={formData.otherReferralSource}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-md focus:ring-tech-green focus:border-tech-green ${
                      formErrors.otherReferralSource ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.otherReferralSource && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.otherReferralSource}</p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tech-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Schedule a Call"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

