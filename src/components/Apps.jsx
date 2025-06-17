import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronDown,
  Download,
  Plus,
  Play,
  Monitor,
  Smartphone,
  Apple,
  Code,
  X,
} from "lucide-react";
import TutorialModal from "./TutorialModal";
import { t } from "../utils/translations";

const getOsIcon = (osName) => {
  const icons = {
    Windows: <Monitor className="h-6 w-6" />,
    Android: <Smartphone className="h-6 w-6" />,
    iOS: <Apple className="h-6 w-6" />,
    Linux: <Code className="h-6 w-6" />,
    default: <X className="h-6 w-6" />,
  };
  return icons[osName] || icons.default;
};

const AppCard = ({ app, t, subLink, onTutorialOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openShadowrocketURL = (subLink) => {
    const encodedURL = btoa(subLink);
    const shadowrocketLink = "sub://" + encodedURL;
    window.location.href = shadowrocketLink;
  };

  return (
    <Card className="mb-4">
      <CardHeader
        className="cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={app.logo}
              alt={`${app.name} logo`}
              className="w-8 h-8 rounded-lg object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/32x32?text=App";
              }}
            />
            <div>
              <h3 className="font-medium">{app.name}</h3>
              <p className="text-sm text-muted-foreground">
                {app.faDescription || app.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={
                app?.price === "0"
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : app?.isAd
                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }
            >
              {app.price === "0"
                ? t("free")
                : app?.isAd
                ? t("ad")
                : `${app.price} $`}
            </Button>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="flex flex-col gap-5 my-3">
            {app.downloadLink && !app?.isAd && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(app.downloadLink, "_blank")}
              >
                <Download className="h-4 w-4 me-2" />
                {t("download")}
              </Button>
            )}

            {app?.isAd && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(app.downloadLink, "_blank")}
              >
                <Download className="h-4 w-4 me-2" />
                {app.adBtnText}
              </Button>
            )}

            {app.configLink && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  if (app.name === "Shadowrocket") {
                    openShadowrocketURL(subLink);
                  } else {
                    window.open(
                      app.configLink.replace("{url}", subLink),
                      "_blank"
                    );
                  }
                }}
              >
                <Plus className="h-4 w-4 me-2" />
                {t("configuration")}
              </Button>
            )}

            {app.tutorialSteps?.length > 0 && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onTutorialOpen(app)}
              >
                <Play className="h-4 w-4 me-2" />
                {t("watchVideo")}
              </Button>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const OsSection = ({ os, t, subLink, onTutorialOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4">
      <CardHeader
        className="cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getOsIcon(os.engName)}
            <h3 className="font-medium">{os.name || os.engName}</h3>
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4 my-4">
            {os.apps.map((app, appIndex) => (
              <AppCard
                key={appIndex}
                app={app}
                t={t}
                subLink={subLink}
                onTutorialOpen={onTutorialOpen}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const Apps = ({ subLink }) => {
  const [operatingSystems, setOperatingSystems] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModalOpen = (app) => {
    setModalData({
      title: app.name,
      videoLink: app.videoLink,
      tutorialSteps: app.tutorialSteps,
    });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    fetch(
      import.meta.env.VITE_JSON_APPS_URL ||
        "https://raw.githubusercontent.com/MatinDehghanian/public-assets/refs/heads/main/json/os.json"
    )
      .then((response) => response.json())
      .then((data) => setOperatingSystems(data.operatingSystems));
  }, []);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Monitor className="h-5 w-5 text-primary-foreground" />
            </div>
            {t("operatingSystems")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {operatingSystems.map((os, index) => (
              <OsSection
                key={index}
                os={os}
                t={t}
                subLink={subLink}
                onTutorialOpen={handleModalOpen}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <TutorialModal
        open={modalOpen}
        handleClose={handleModalClose}
        data={modalData}
      />
    </>
  );
};

Apps.propTypes = {
  subLink: PropTypes.string,
};

export default Apps;
