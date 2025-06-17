import PropTypes from "prop-types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { t } from "../utils/translations";

const TutorialModal = ({ open, handleClose, data }) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{data?.faTitle || data?.title}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Render the tutorial steps if they exist */}
          {data?.tutorialSteps?.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("tutorialTitle")}
              </h3>
              <div className="space-y-4">
                {data.tutorialSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">
                        {step.faStepText || step.stepText}
                      </p>
                      {step?.stepImage && (
                        <img
                          src={step.stepImage}
                          alt={`Step ${index + 1}`}
                          className="w-full mt-3 rounded-lg border"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">{t("noTutorial")}</p>
          )}

          {data?.videoLink && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={data.videoLink}
                title={data.title}
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

TutorialModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    faTitle: PropTypes.string,
    videoLink: PropTypes.string,
    tutorialSteps: PropTypes.arrayOf(
      PropTypes.shape({
        stepText: PropTypes.string,
        faStepText: PropTypes.string,
        stepImage: PropTypes.string,
      })
    ),
  }),
};

export default TutorialModal;
