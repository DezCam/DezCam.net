
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight } from "lucide-react";

interface WaitingListDialogProps {
  trigger?: React.ReactNode;
}

export default function WaitingListDialog({ trigger }: WaitingListDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: ""
  });
  const { toast } = useToast();

  const waitingListMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("/api/waiting-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Successfully joined waiting list!",
        description: "I'll notify you when trading classes become available.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: ""
      });
      setOpen(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error joining waiting list",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleExperienceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    waitingListMutation.mutate(formData);
  };

  const defaultTrigger = (
    <Button className="bg-california-gold text-berkeley-blue font-semibold hover:bg-yellow-400 transition-colors flex items-center px-4 py-2">
      Join Waiting List for Trading Classes
      <ArrowRight className="ml-1 h-4 w-4" />
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-berkeley-blue">Join Trading Classes Waiting List</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="experience">Trading Experience</Label>
            <Select value={formData.experience} onValueChange={handleExperienceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Complete Beginner</SelectItem>
                <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">What would you like to learn?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your trading goals and what you'd like to learn..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-berkeley-blue hover:bg-berkeley-blue/90 text-white"
            disabled={waitingListMutation.isPending}
          >
            {waitingListMutation.isPending ? "Joining..." : "Join Waiting List"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
